
const http = require('http');

function request_listener(req, res){
    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>response comming from node js server !!!</h1>');
    res.end();
}

const server = http.createServer(request_listener);

server.listen(3000);