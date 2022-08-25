const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
  let path = '';

  if (req.url === '/') {
    path = './index.html';
  } else if (req.url === '/about'
    || req.url === '/contact-me'
  ) {
    path = `./${req.url}.html`;
  } else {
    path = './404.html';
  }

  fs.readFile(path, (err, data) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated.');
  });
});
