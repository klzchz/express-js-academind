
// const products = [];
const Product  = require('../models/product');



exports.getAddProduct =  (req, res, next) => {
  
      res.render('add-product',{
        docTitle: 'Adding a Product', 
        path: '/admin/add-product',
        activeAddProduct:true,
        formsCSS:true,
        productCSS:true
    });
};


exports.addProduct = (req,res,next)=>{
    console.log(req.body.title)
    const product = new Product(req.body.title);
    product.save();
    // fs.writeFileSync('message.text',req.body.title);
    // products.push({title: req.body.title});
    res.redirect('/');;
  
  };

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop', {
      prods: products,
      docTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });

    // res.sendFile(path.join(rootDir,'views','shop.html'));
  
  };