const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine','pug');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFound = require('./routes/404');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes);
app.use(shopRoutes);
app.use(notFound);

app.listen(3000);