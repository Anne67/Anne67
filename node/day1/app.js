var express = require('express');
var app = new express();

app.set('view engine','ejs');
app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
    res.render('index')
});
app.get('/contact',function(req,res){
    var data = [{age:29,name:['Henry','qwwq']},{age:19,name:['Anne']},{age:20,name:['Lisa','aaa']}];
    res.render('ann.ejs',{webname:req.params.id,data:data})
});

app.get('/contact1/:id',function(req,res){
    var data = [{age:29,name:['Henry','qwwq']},{age:19,name:['Anne']},{age:20,name:['Lisa','aaa']}];
    res.render('ann.ejs',{webname:req.params.id,data:data})
});
app.listen(3333);