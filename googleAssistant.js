const DialogflowApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});

  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Please select option from ',
    displayText: 'Please select option from '});
  //.addSuggestions('Option-1') ;
  
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

}

module.exports.BuildRichResponse=funResponse;