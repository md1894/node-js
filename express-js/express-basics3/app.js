const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// to see the post data in req.body
app.use(bodyParser.urlencoded({extended:false}));



app.use('/add-product',(req,res,next)=>{ // localhost:3000/add-product
    res.send('<body><form action="/product" method="POST"><input type="text" name="title"><button type="submit">add</button></form></body>');
});

// this url will listen to the default post request
// we want it to execute if and only if request is POST
// app.use('/product',(req,res,next)=>{ 
//     console.log(req.body);
//     res.redirect('/');
// });


// same as use method
// dedicated to post
app.post('/product',(req,res,next)=>{ 
    console.log(req.body);
    res.redirect('/');
});

// dedicated to get method
app.get('/product',(req,res,next)=>{ 
    console.log('get method !!!!!!!!!!!!');
    res.redirect('/');
});

app.use('/',(req,res,next)=>{
    console.log('this will always run !!!');
    res.send('<h1>default page !!!</h1>')
 });

app.listen(3000);