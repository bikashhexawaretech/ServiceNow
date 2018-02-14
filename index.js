
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var inc = require('./app.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




const DialogflowApp = require('actions-on-google').DialogflowApp;

function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});

  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Please select option from ',
    displayText: 'Please select option from '})
  .addSuggestions('bikash') ;
  
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

}


app.post('/', function (req, res) {
  console.log(req.body);
  buildRichResponse(req, res);
})




app.listen(portC, function () {
  console.log('Example app listening on port !'+portC)
})