const path = require('path')

const express=require('express');

//const rootDir = require('../../helper/path');

const router = express.Router();

///admin/Add-product => GET
/*router.get('/add-product',(req,res,next)=>{
    //console.log('In another middleware');
    //res.sendFile(path.join(rootDir,'view','add-product.html'))
})*/

 // /admin/Add-product => POST
 router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

 });*/

module.exports = router;