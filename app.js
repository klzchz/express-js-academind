const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// app.engine('hbs',expressHbs({ layoutsDir:"views/layouts",defaultLayout:"main-layout",extname:'hbs'}));
app.set('view engine','ejs');
app.set('views','views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const notFound = require('./routes/404');
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);
app.use(notFound);

app.listen(3000);   