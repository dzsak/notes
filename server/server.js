const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, Node.js HTTP Server!</h1>');
    res.end();
});

// Start the server
server.listen(3000, () => {
    console.log('Node.js HTTP server is running on port 3000');
});
