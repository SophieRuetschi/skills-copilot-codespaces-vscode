// create web server
// 1. import express module
// 2. create express app
// 3. set up port
// 4. create a route
// 5. create a callback function
// 6. listen to the port
// 7. run the app

// 1. import express module
const express = require('express');

// 2. create express app
const app = express();

// 3. set up port
const port = 3000;

// 4. create a route
app.get('/', (req, res) => {
    res.send('Hello World');
})

// 5. create a callback function
app.get('/comments', (req, res) => {
    res.send('This is comments page');
})

// 6. listen to the port
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})

// 7. run the app
// node comments.js
// go to browser and type http://localhost:3000
// go to browser and type http://localhost:3000/comments