
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var inc = require('./app.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var googleAssistant = require('./googleAssistant.js');



app.post('/', function (req, res) {
  

  googleAssistant.BuildRichResponse(req, res);
})




app.listen(portC, function () {
  console.log('Example app listening on port !'+portC)
})