const express = require('express');

const routes = express.Router();

// GET /admin/add-product
routes.get('/add-product', (req,res,next)=>{
    res.send('<body><form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">add</button></form></body>');
});


// POST /admin/product
routes.post('/product', (req,res,next)=>{
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = routes;