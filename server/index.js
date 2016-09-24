var express = require('express');
var app = express();
var shopdata = require('./shopdata.js');


app.get('/', function (req, res) {
  res.send('Hello Singapore!');
});

app.post('/shopdata', function (req, res){
	res.send(shopdata);
});

app.listen(3000, function () {
  console.log("listening");
});
