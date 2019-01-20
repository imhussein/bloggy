const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 300;
const http = require('http');

// React Static Files
app.use(express.static(path.join(__dirname + '/build')));

// Hanlde All Routes
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const server = http.createServer(app);

// Listen to port 3000
app.listen(port, () => console.log(`Server started at port ${port}`));