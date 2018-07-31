/* var express = require('express');
var app = express();
console.log('HELLO THERE');

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

var Setup = require('./initialSetup');
var initialSetup = Setup.initSetup;

app.get('/', function (req, res) {
   console.log('Listen... xD');
   initialSetup.price[0].caption = "HELLO THERE"
   res.send(initialSetup);
});

app.listen(server_port, server_ip_address);
 */
console.log('Hello world!!!');