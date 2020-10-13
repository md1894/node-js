const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); // old one
  res.render('add-product', {title:'ADD-PRODUCT'});
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({title:req.body.title}); // admin.js is responsible to add all data
  res.redirect('/');
});

// module.exports = router;
exports.routes = router;
exports.products = products;
