const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

//����users.js
const users = require('./routes/api/users');

//DB config
const db = require('./config/keys').mongoURI;
//connect to mongodb
mongoose.connect(db)
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err));

//ʹ��body-parse�м��
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send('hello world!1111')
});

// ʹ��routes
app.use('/api/users',users);


const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});