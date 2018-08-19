if(process.env.NODE_ENV == "production"){
    module.expors =
        {mongoURL:"mongodb://Anne267:test1234@ds247830.mlab.com:47830/lesson-an-prod"}
}else{
    module.exports =
        {mongoURL:"mongodb://localhost/lesson-app"}
}