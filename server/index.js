const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// APIs
app.get('/hello', (req, res) => {
    res.send('Hello, world!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});