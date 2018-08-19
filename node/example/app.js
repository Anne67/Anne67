const express = require('express');

const exphbs  = require('express-handlebars');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

//connect to mngoose
mongoose.connect("mongodb://localhost/example-app")
    .then(()=>{
        console.log("MongooseDB connected...");
    })
    .catch(err =>{
        console.log(err);
    });
//引入模型
require('./models/Idea.js');

const Idea = mongoose.model('ideas');


//handlebars middleleware 中间件
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


//body-parser middleware
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//配置路由
app.get('/',(req,res)=>{
    const title = '111111111111111111';
    res.render('index',{
        title:title
    })  //render ===views下面的文件名
});

app.get('/about',(req,res)=>{
    res.render('about')
});

app.get('/active',(req,res)=>{
    res.render('active')
});

//添加
app.get('/advice/advice',(req,res)=>{
    res.render('advice/advice')
});
//编辑
app.get('/advice/edit/:id',(req,res)=>{
    res.render('advice/edit')
});

app.get('/advice',(req,res)=>{
    Idea.find({})
        .then(ideas=>{
            res.render('advice/index',{
                ideas:ideas
            })
        })

});

app.post('/advice',urlencodedParser,(req,res)=>{
    const newAdvice = {
            title:req.body.title,
            details:req.body.details
        };
    new Idea(newAdvice)
        .save()
        .then(idea=>{
            res.redirect('/advice')
        })

});



const port=7000;

app.listen(port,()=>{
    console.log(`Server is started on ${port}`)
});