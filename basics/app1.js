// core modules in node js
// http, https, fs, path, os
const http = require('http');
/*
request object :
1. req.url
2. req.method
3. req.headers
*/
function request_listener(req, res){
    console.log('my first request to node js server::', req.url, "::", req.method, '::', req.headers)
    //process.exit(); //this will kill the process , means server will not be listening any more
}

const server = http.createServer(request_listener);

server.listen(3000);