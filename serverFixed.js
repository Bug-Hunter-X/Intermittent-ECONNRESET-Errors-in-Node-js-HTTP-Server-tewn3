const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.on('error', err => {
    console.error('Response error:', err);
  });
  response.on('finish', () => {
    console.log('Response sent successfully.');
  });
  response.end(JSON.stringify({ message: 'Hello World!' }));
};

const server = http.createServer(requestListener);

server.on('error', err => {
  console.error('Server error:', err);
});

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});
