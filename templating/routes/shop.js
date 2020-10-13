const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  console.log(products); // shop.js is responsible to show all the data
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // old one
  res.render('shop', {prods:products, docTitle:'SHOP'}); //shop.pug
});

module.exports = router;
