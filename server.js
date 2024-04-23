const express = require('express');
const fs = require("fs");
// const app = require("./app");
const https = require("https");
const app = express();
const helmet = require("helmet");
const port = 5000;

app.use(helmet());

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

app.get('/', (req,res) => {
    res.send('hello I am SSL Server !');
});

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});