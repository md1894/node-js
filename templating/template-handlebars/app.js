const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

// handle bars was not installed built in 
// hence we have to use engine method of express to configure that
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
  })
);

// we set hbs as our templating engine
// set method is used to set data globally for configuration
app.set('view engine', 'hbs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // data passed to template {pageTitle: 'Page Not Found'}
  res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);
