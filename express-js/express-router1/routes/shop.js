const express = require('express');

const routes = express.Router();

routes.get('/',(req,res,next)=>{
    console.log('this will always run !!!');
    res.send('<h1>default page !!!</h1>')
 });

 module.exports = routes;
