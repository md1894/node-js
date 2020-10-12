const express = require('express');
const path = require('path') // node js core module
const rootDir = require('./../utils/path');
const routes = express.Router();

routes.get('/',(req,res,next)=>{
    console.log('this will always run !!!');
    // res.send('<h1>default page sachin sir !!!</h1>')
    // res.sendFile(path.join(__dirname, '../','views', 'shop.html'));
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
 });

 module.exports = routes;
