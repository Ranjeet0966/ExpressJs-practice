const bodyParser=require('body-parser');

const express = require('express');
//const { create } = require('domain');
const app= express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');




app.use(bodyParser.urlencoded({extended: false}));

app.use(shopRoutes);
app.use('/admin',adminRoutes);


app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})
app.listen(3002);