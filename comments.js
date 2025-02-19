// create web server
// create a route that listens for "/comments" and returns a response with a list of comments
// comments.js
const express = require('express');
const app = express();

app.get('/comments', (req, res) => {
  res.json([
    { username: 'Todd', comment: 'lolol' },
    { username: 'Skyler', comment: 'lmao' },
    { username: 'Sk8erBoi', comment: 'rofl' },
    { username: 'Ada', comment: 'haha' },
  ]);
});

app.listen(4001, () => {
  console.log('Server is listening on port 4001');
});