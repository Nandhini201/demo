const http = require('http');
const server =http.createServer((req, res) =>{
 res.setHeader('content-type', 'text/html');
 res.end('ch1>This is a folder.js.backend dev!<h1>');

});
server.listen(2000);