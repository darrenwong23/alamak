var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello Singapore!');
});

app.listen(3000, function () {
});
