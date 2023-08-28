const path=require('path');
const express = require('express');
const bodyParser=require('body-parser');


//const { create } = require('domain');
const app= express();

const adminRoutes= require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404)

app.listen(3002);