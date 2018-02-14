
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
  .addSimpleResponse({speech: 'Please select option from '+contentType,
    displayText: 'Please select option from '+contentType})
  .addSuggestions(content) ;
  
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

  /*function welcomeIntent (assistant) {
    assistant.ask(googleAssistant);
  }

  function numberIntent (assistant) {
    let number = assistant.getArgument(NUMBER_ARGUMENT);
    assistant.tell('You said ' + number);
  }*/

 /* let actionMap = new Map();
  actionMap.set(WELCOME_INTENT, welcomeIntent);
  actionMap.set(NUMBER_INTENT, numberIntent);
  assistant.handleRequest(actionMap);*/

  /*
  function responseHandler (assistant) {
    console.log("okok")
    // intent contains the name of the intent you defined in the Actions area of API.AI
    let intent = assistant.getIntent();
    switch (intent) {
      case WELCOME_INTENT:
        assistant.ask('Welcome! Say a number.');
        break;

      case NUMBER_INTENT:
        let number = assistant.getArgument(NUMBER_ARGUMENT);
        assistant.tell('You said ' + number);
        break;
    }
  }
  */
  // you can add the function name instead of an action map
 // assistant.handleRequest(responseHandler);
}


app.post('/', function (req, res) {
  console.log(req.body);
  buildRichResponse(req, res);
})

/*
app.get('/', function (req, res) {
  res.send("Server is up and running.")
})
*/


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})