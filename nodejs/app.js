const express=require('express');
const handlebarsexp =require('express-handlebars');
var app=express();

app.engine('handlebars',handlebarsexp({defaultLayout:'mainpage'}));
app.set('view engine','handlebars');

app.use(express.static('views/static'));
app.use(express.urlencoded());




app.get('/',(req,res)=>{
res.render('bootstarpex',{name:'welcome'});

});

app.post('/getdata',(req,res)=>{
    var name=req.body.getname;
    var address=req.body.getaddress;
    var place=req.body.getplace;
    var mobile=req.body.getmobile;
    var email=req.body.getemail;
    console.log(name);
    console.log(address);
    console.log(place);
    console.log(mobile);
    console.log(email);
    //res.send(req.body.getname);
    });

app.get('/about',(req,res)=>{
res.render('about');
});
app.get('/contact',(req,res)=>{
res.render('contact');
 });
 app.get('/Gallery',(req,res)=>{
    res.render('Gallery');
     });

     app.get('/login',(req,res)=>{
        var uname=req.body.username;
        var pass=req.body.password;

if(uname=="admin"&&pass=="100"){
res.send("success")
}
else{
    res.send("failed")  

}
     });

//app.listen(4000,()=>{
    app.listen(process.env.PORT ||4000,()=>{
    console.log("web app running successfully")
});