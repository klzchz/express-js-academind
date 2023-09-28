const path = require('path');

const express = require('express');

const router = express.Router();
// const fs = require('fs');
const productsController = require('../controllers/products');
const rootDir =  require('../util/path');


    // res.send('<form action="/admin/add-product" method="post"> <input type="text" name="title"><button type="submit">Add a Product</button></form>');
    // res.sendFile(path.join(rootDir,'views','add-product.html'));

  // router.get('/add-product', (req, res, next) => {
  
  //   res.render('add-product',{
  //     docTitle: 'Adding a Product', 
  //     path: '/admin/add-product',
  //     activeAddProduct:true,
  //     formsCSS:true,
  //     productCSS:true
  // });
  // });

  router.get('/add-product',productsController.getAddProduct);
  
  router.post('/add-product',productsController.addProduct);

  // exports.routes = router;
  // exports.products = products;
  module.exports = router;


  