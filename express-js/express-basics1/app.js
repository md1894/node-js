const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log('in the middleware');
    next(); // if we invoke this function then only call will forward to the next middleware
});

// next middleware
app.use((req,res,next)=>{
    console.log('in the another middleware');
    res.send('<h1>Hello from Express !!! </h1>');
});

app.listen(3000);