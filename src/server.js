const express = require('express');
const fs = require("fs");
// const app = require("./app");
const https = require("https");
const app = express();
const helmet = require("helmet");
const { checkLoggedIn } = require('./middleware/auth');
const port = 5000;

app.use(helmet());

//** ----- Restrick access to all of our API -------- */
// app.use(checkLoggedIn)
//** ------------------------------------------------- */


app.get('/', (req,res) => {
    res.send('hello I am SSL Server !');
});

app.get('/secret', checkLoggedIn, (req,res) => {
    res.send('hello I am SSL Server !');
});

const server = https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
}, app);

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});