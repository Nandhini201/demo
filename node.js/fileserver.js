const http =require('http');
const fs= require('fs');
const server =http.createServer((req, res) => {
    fs.readFile('index.html',(err, data) => {
        if (err) {
            res.end('Error loading file');

        }else{
            res.setHeader('content-Type',  'text/html');
            res.end(data);
        }
    
    });

});
server.listen(3000);