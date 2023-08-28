const path = require('path')

const express=require('express');

//const rootDir = require('../../helper/path');

const productController =require('../controllers/products');

const router = express.Router();



///admin/Add-product => GET
/*router.get('/add-product',(req,res,next)=>{
    //console.log('In another middleware');
    //res.sendFile(path.join(rootDir,'view','add-product.html'))
})*/

router.get('add-product', productController.getAddProduct);

 // /admin/Add-product => POST
 /*router.post('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');

 });*/

 router.post('/add-product',productController.postAddProduct)

module.exports = router;