const path=require('path')

const express = require('express');

const router= express.Router();

const productController = require('../controllers/products')

//const rootDir = require('../../helper/path');

/*router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'view','shop.html'))
});*/

router.get('/', productController.getProducts)
module.exports=router;