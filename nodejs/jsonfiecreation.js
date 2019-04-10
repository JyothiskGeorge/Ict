const express=require('express');

var app=express();
app.get('/',(req,res)=>{
res.send("Hello");
});


app.get('/home',(req,res)=>{
    res.send("welcome");
    });

app.get('/contact',(req,res)=>{
    res.send('[{"name":"Jaise","age":28},{"name":"Jicks","age":26}]');
    });
app.listen(4000);