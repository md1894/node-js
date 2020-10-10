const fs = require('fs');

function request_listener(req, res){
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write('<body>');
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message">')
        res.write('<button type="submit">send</button>')
        res.write('</form></body>');
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
        });
        res.statusCode = 302; // no error because of continues execution
        res.setHeader('Location', '/')
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1>response comming from node js server !!!</h1>');
    res.end();
}

module.exports = request_listener;

// module.exports = {
//     'request_handler' : request_listener,
//     'text':'hardcoded text'
// }