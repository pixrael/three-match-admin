var express = require('express');
var app = express();

var Setup = require('./initialSetup');
var initialSetup = Setup.initSetup;

app.get('/', function (req, res) {
   initialSetup.price[0].caption = "HELLO THERE"
   res.send(initialSetup);
});

app.listen(3000);
