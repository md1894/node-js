const express = require('express');
const path = require('path') // node js core module
const routes = express.Router();
const rootDir = require('./../utils/path');

// GET /admin/add-product
routes.get('/add-product', (req,res,next)=>{
    
    // res.send('<body><form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">add</button></form></body>');
    // res.sendFile(path.join(__dirname, '../','views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});


// POST /admin/product
routes.post('/product', (req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = routes;