const path=require('path');
const express = require('express');
const bodyParser=require('body-parser');


//const { create } = require('domain');
const app= express();


const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({extended: false}));

// serving files statically
app.use(express.static(path.join(__dirname,'public')))


app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'view','404.html'));
})

app.listen(3002);