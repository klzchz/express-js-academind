const path = require('path')
const express = require('express');

const router = express.Router();
const rootDir =  require('../util/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
  // res.send('<h1>Hello from Express!</h1>');
  console.log(adminData.products);
  let prods = adminData.products;
  // res.sendFile(path.join(rootDir,'views','shop.html'));
  res.render('shop',{hasProducts:prods.length > 0, docTitle: 'Shop', path: '/admin/add-product',prods});
});

module.exports = router;