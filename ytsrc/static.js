const express = require("express");
const path = require('path');
const app = express();

const staticPath=path.join(__dirname,'../ytpublic')

console.log(__dirname);

console.log(staticPath)

app.use(express.static(staticPath));


// app.get(route,callback(req,res)) that is a syntax of .get method
app.get("/",(req,res)=>{
   // res.send("<h1>This is login page</h1>");
   res.write("<h1>This is login page</h1>");
   res.write("<h1>This is login page 2</h1>");
   res.send();
});


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

app.listen(2003, ()=>
{
    console.log('port running on 2000');
}); 

// middleWare use


