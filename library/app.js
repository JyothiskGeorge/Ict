const express=require('express');
const path=require('path');
const chalk=require('chalk');
var app=express();
const booksRouter=express.Router();
app.use(express.static(path.join(__dirname,"/public")))

app.set('views','./src/views');
app.set('view engine','ejs');

booksRouter.route('/')
.get((req,res)=>{
    res.render('books',{nav:[{link:'/books',title:'BOOKS'},{link:'/authors',title:'AUTHORS'}],title:"Books"});
});

booksRouter.route('/single')
.get((req,res)=>{
    res.send("Hello single book");
});

app.get('/',function(req,res){
    res.render('index',{nav:[{link:'/books',title:'BOOKS'},{link:'/authors',title:'AUTHORS'}],title:"Library"});

});

app.use('/books',booksRouter);
//app.get('/',function(req,res){
//res.send("Hai,Welcome");
//});


app.listen(4000,function(){
console.log('listening to port'+chalk.red('4000'));
});