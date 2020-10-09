// redirecting requests
// parsing request data
const http = require('http');
const fs = require('fs');

/**
 * node js buffer concept:
 * data is passed part by part (data is present as a stream)
 *
 *  'on' is a event listener method 'data' is the event to be fired
 *  'end' is a event that is triggered when we received full data stream
     req.on('data', (chunk)=>{
         console.log(chunk);
         body.push(chunk);
    });
 *  
 */

function request_listener(req, res){
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        return res.end();
    }
    if(url == '/message' && method === 'POST'){
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('message.txt', message); // data gets write in file after some time in future
            // res.statusCode = 302; // error because of asynchronous execution
            // res.setHeader('Location', '/')
            // //res.writeHead(302, {'Location': '/'});
            // return res.end();
        });
        res.statusCode = 302; // no error because of continues execution
        res.setHeader('Location', '/')
        //res.writeHead(302, {'Location': '/'});
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>response comming from node js server !!!</h1>');
    res.end();
}

const server = http.createServer(request_listener);

server.listen(3000);