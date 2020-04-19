require("dotenv").config();

const path = require('path');
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

var aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//GET Method
const appData = {};
app.get("/all", function(req, res) {
  res.send(appData);
});
