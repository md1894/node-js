const express = require('express');
const bodyParser = require('body-parser');
const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const app = express();

// to see the post data in req.body
app.use(bodyParser.urlencoded({extended:false}));

app.use(shopRoutes);
// for all the url that starts with /admin
app.use('/admin', adminRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>NOT FOUND !! ERROR 404</h1>');
});

app.listen(3000);