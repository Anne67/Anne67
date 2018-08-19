// @login & register
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const gravatar = require('gravatar');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const keys = require('../../config/keys');

// $route GRT api/users/test
// @desc 返回的请求的json数据
// @access public (如果返回token,则是私有接口)
router.get('/test',(req,res)=>{
    res.json({msg:'login works'})
});

// $route POST api/users/register
// @desc 返回的请求的json数据
// @access public (如果返回token,则是私有接口)
router.post("/register",(req,res)=>{
    // console.log(req.body);

    //查询数据中是否有邮箱
    User.findOne({email:req.body.email})
        .then((user)=>{
            if(user){
                return res.status(400).json({email:"邮箱已经注册!"})
            }else{

                var avatar = gravatar.url(req.body.email, {s: '200', r: 'pg', d: 'mm'});
                const newUser = new User({
                    name:req.body.name,
                    email:req.body.email,
                    avatar,
                    password:req.body.password
                });

                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(newUser.password, salt, (err, hash) =>{
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user=>res.json(user))
                            .catch(err=>console.log(err));

                    });
                });
            }
        })

});

// $route POST api/users/login
// @desc 返回token jwt passport
// @access public
router.post('/login',(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;
    //查询数据库
    User.findOne({email})
        .then(user=>{
            if(!user){
                return res.status(404).json({email:"用户不存在!"});
            }

            //密码匹配
            bcrypt.compare(password,user.password)
                .then(isMatch =>{
                    if(isMatch){
                        const rule = {id:user.id,name:user.name};
                        jwt.sign("rule","keys.secretOrKey",(err,token)=>{
                            if(err) throw err;
                            res.json({
                                success:true,
                                token:"anne267"+token
                            })
                        });
                        // res.json({msg:"success"});
                    }else{
                       return res.status(400).json({password:"密码错误!"})
                    }
                })
        })
});



// $route GET api/users/current
// @desc return current user
// @access Private
router.get('/current',(req,res)=>{
    res.json({msg:"success"})
})


module.exports = router;