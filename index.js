const express = require('express');

const app = express();
const port = 8080;

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.get('/about', function (req, res) {
  res.sendFile('about.html', { root: __dirname });
});

app.get('/contact-me', function (req, res) {
  res.sendFile('contact-me.html', { root: __dirname });
});

app.get('*', function (req, res) {
  res.status(404).sendFile('404.html', { root: __dirname });
});

app.listen(port, function () {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process terminated.');
  });
});
