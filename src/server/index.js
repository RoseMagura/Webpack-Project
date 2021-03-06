const path = require('path');

const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const port = 3001;

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'))
})

const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});

var aylien = require("aylien_textapi");
var textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

//Post Url
app.post('/postURL', function(req, res){
  textapi.sentiment({
    'url': `${req.body.input.url}`,
    'mode': 'document'
  }, function(error, response) {
     console.log('Error: ', error);
     if (error === null){
       res.send(response);
     }

  })
});
