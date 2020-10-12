const express = require('express');

const app = express();

app.use('/',(req,res,next)=>{
   console.log('this will always run !!!');
   next(); // it will go to default response
});

app.use('/test',(req,res,next)=>{ // localhost:3000/test
    res.send('<h1>test page !!! </h1>');
});

app.use('/',(req,res,next)=>{ /* default response */
    res.send('<h1>default page</h1>');
});

app.listen(3000);