const DialogflowApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});

  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Simple Text Speech',
    displayText: 'Simple Text Display'})
    .addSimpleResponse({
      speech: 'I can show you basic cards, lists and carousels as well as ' +
        'suggestions on your phone',
      displayText: 'I can show you basic cards, lists and carousels as ' +
        'well as suggestions'})
    .addSuggestions(
      ['Basic Card', 'List', 'Carousel', 'Suggestions']);
 
  
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

}

module.exports.BuildRichResponse=funResponse;