require("dotenv").config();

const path = require('path');
const express = require("express");
const app = express();
const port = 3001;

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

//GET Method
const appData = [];
app.get("/all", function(req, res) {
  res.send(textapi.sentiment({
    'text': "Trump's approval rating is down significantly from 49% in March,"
    + "while his disapproval rating is up 9 points from 45%.",
    // 'url': "https://edition.cnn.com/2020/04/19/politics/trump-approval-rating-rally/index.html",
    mode: 'document'
  }, function(error, response) {
    if (error === null) {
      console.log(response);
      appData.push(response);
    }
  }));
  // res.send(appData);
});

// textapi.sentiment({
//   'url': "https://edition.cnn.com/2020/04/19/politics/trump-approval-rating-rally/index.html",
//   mode: 'document'
// }, function(error, response) {
//   if (error === null) {
//     console.log(response);
//     appData.push(response);
//   }
// });
