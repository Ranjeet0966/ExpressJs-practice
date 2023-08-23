const express = require("express");

const app = express();

let name ='Ranjeet';
let password='Ganguly@123';

// app.get(route,callback(req,res)) that is a syntax of .get method
app.get("/",(req,res)=>{
   // res.send("<h1>This is login page</h1>");
   res.write("<h1>This is login page</h1>");
   res.write("<h1>This is login page 2</h1>");
   res.send();
});
app.use(loginMiddleware);

app.get('/name',(req,res)=>{
    res.json([{
         firstName : 'Ranjeet',
        lastName : 'Yadav'
    },
    {
        firstName : 'Sumit',
        lastName : 'Yadav'
    }])

})

app.get('/About',(req,res)=>{
    res.send("Welcome to About page.")

})

app.get('/History',(req,res)=>{
    res.send("Welcome to history page of India.")

})

app.listen(2000, ()=>
{
    console.log('port running on 2000');
}); 

// middleWare use

function loginMiddleware(req,res,next){
    if(name=='Ranjeet'&& password=='Ganguly@123')
    {
        next();
    }
    else
    {
        res.send('can not authenticating');
    }
}

/*API 
http method:--
get - read 
post - create 
put - update 
delete -delete */


