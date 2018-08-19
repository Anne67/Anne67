const express = require('express');
// https://github.com/ericf/express-handlebars
const exphbs  = require('express-handlebars');
const path = require("path");
const bodyParser = require('body-parser');  //express版本在4以上不需要安装,直接引入
const mongoose = require('mongoose');

//向用户提示信息
const session = require('express-session');
const flash = require('connect-flash');

const methodOverride = require('method-override');

const passport = require('passport');

const app = express();

//load routes
const ideas = require('./routes/ideas');
const users = require('./routes/users');

require('./config/passport')(passport);

const db = require('./config/database');


//connect to mngoose
mongoose.connect(db.mongoURL)
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


//使用静态文件
app.use(express.static(path.join(__dirname,'public')));


//method-override middleware
app.use(methodOverride('_method'));

//session & flash middleware
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

//全局变量
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;
    next()
});

//配置路由
app.get('/',(req,res)=>{
    const title = '花开千年,落千年';
    const title1 = '魂相守、此情祭...';
    const title2 = '情不为因果,缘注定生死';
    res.render('index',{
        title:title,
        title1:title1,
        title2:title2
    })  //render ===views下面的文件名
});
app.get('/about',(req,res)=>{
    res.render('about')
});


//使用routes
app.use('/ideas',ideas);
app.use('/users',users);


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server is started on ${port}`)
});