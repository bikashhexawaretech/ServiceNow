
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
    console.log('Entry');
   // googleAssistant.buildRichResponseSimpleMessage(req, res);
    googleAssistant.buildRichResponseCarousal(req, res);
   // googleAssistant.buildRichResponseList(req, res);
})




app.listen(portC, function () {
  console.log('Example app listening on port !'+portC)
})