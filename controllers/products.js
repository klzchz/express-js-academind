
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
    // res.send('<h1>Hello from Express!</h1>');
    const products = Product.fetchAll();
    // res.sendFile(path.join(rootDir,'views','shop.html'));
    res.render('shop',{
      hasProducts:products.length > 0,
       docTitle: 'Shop', 
       path: '/',
       prods:products,
       activeShop:true,
       productCSS:true
      });
  };