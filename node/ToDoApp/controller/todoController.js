
var bodyParser = require('body-parser');

//对数据进行解析
var urlencodeParser = bodyParser.urlencoded({extended:false});


var data =[
    {item:"曾经有份真挚的感情摆在我面前!"},
    {item:"而我不懂得珍惜!"},
    {item:"直到一万年以后!"},
    {item:"结束...!"}
];

module.exports = function(app){
    //获取数据
    app.get('/todo',function(req,res){
        res.render('todo',{todos:data});
    });

    //传递数据
    app.post('/todo',urlencodeParser,function(req,res){
        //coding...
        console.log(req.body);
        data.push(req.body);
    });

    //删除数据
    app.delete('/todo/:dee',function(req,res){
        //coding...
        // console.log(req.params.dee);
        data = data.filter(function(too){
            return req.params.dee !== too.item
        });
        res.json(data);
    })
};