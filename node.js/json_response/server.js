const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/api/user' && req.method === 'GET') {
    const user = {
      name: 'Alice',
      age: 12,
        job: 'Eating',
        marks:[0,0,9,6,45,23]
      
    };

    res.statusCode = 200; // OK
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(2000, () => {
  console.log('Server is listening on port 2000');
});