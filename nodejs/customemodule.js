const mymodule=require('./addnumbers')
var x=55;
var y=20;
var z=mymodule.addnum(x,y)
var p=mymodule.subnum(x,y)
var q=mymodule.mulnum(x,y)
var r=mymodule.divnum (x,y)
console.log(z);
console.log(p);
console.log(q);
console.log(r);