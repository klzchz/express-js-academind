const path = require('path');
const express = require('express');
const router = express.Router();
// const fs = require('fs');
const rootDir =  require('../util/path');

const products = [];



  router.get('/add-product', (req, res, next) => {
    // res.send('<form action="/admin/add-product" method="post"> <input type="text" name="title"><button type="submit">Add a Product</button></form>');
    res.sendFile(path.join(rootDir,'views','add-product.html'));
  });
  
  router.post('/add-product',(req,res,next)=>{
    console.log(req.body.title)
    // fs.writeFileSync('message.text',req.body.title);
    products.push({title: req.body.title});
    res.redirect('/');;
  
  });

  exports.routes = router;
  exports.products = products;


  