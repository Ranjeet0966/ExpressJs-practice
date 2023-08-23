const express=require('express')

const router = express.Router();

///admin/Add-product => GET
router.get('/add-product',(req,res,next)=>{
    //console.log('In another middleware');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title" placeholder="Enter your product name"><input type="number" name="Size" placeholder="enter the size of product"><button type="submit" >Add-Product</button></form>');
 })

 // /admin/Add-product => POST
 router.use('/add-product',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
 });

module.exports = router;