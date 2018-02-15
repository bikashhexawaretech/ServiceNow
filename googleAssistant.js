
/*
const DialogflowApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});


  //Suggestion Chips

  
  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Simple Text Speech',
    displayText: 'Simple Text Display'})
    .addSimpleResponse({
      speech: 'Suggestion Chips',
      displayText: 'Suggestion Chips'})
    .addSuggestions(
      ['Basic Card', 'List', 'Carousel', 'Suggestions']);
 
  

  //Basic Card
  
 
  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Simple Text Speech',
    displayText: 'Simple Text Display'})
    .addSimpleResponse({
      speech: 'Basic Cards',
      displayText: 'Basic Cards'})
        .addBasicCard(assistant.buildBasicCard('This is a basic card.') 
                              
          .setSubtitle('This is a subtitle')
          .setTitle('Title: this is a title')
          .addButton('This is a button', 'https://assistant.google.com/')
          .setImage('https://3c2ba678857e073c9506-9b92ffc51ccdc874f7e956dfcfbdbfba.ssl.cf5.rackcdn.com/spark/images/servicenow/servicenow.png', 'Image alternate text')
        );


  
     
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

}
        */

let ActionsSdkApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new ActionsSdkApp({request: req, response: res});

var googleAssistant = assistant.buildRichResponse()
    
.addSimpleResponse('This is a simple response for a list')
addSuggestions(
  ['Basic Card', 'List', 'Carousel', 'Suggestions']),
assistant.buildCarousel()
  
  .addItems(app.buildOptionItem('4',
    ['synonym of title 1', 'synonym of title 2', 'synonym of title 3'])
    .setTitle('Title of First List Item')
    .setDescription('This is a description of a carousel item')
    .setImage(IMG_URL_AOG, 'Image alternate text'))
  // Add the second item to the carousel
  .addItems(app.buildOptionItem('3',
    ['Google Home Assistant', 'Assistant on the Google Home'])
    .setTitle('Google Home')
    .setDescription(`Google Home is a voice-activated speaker powered by
      the Google Assistant.`)
    .setImage('', 'Google Home')
  )
  // Add third item to the carousel
  .addItems(app.buildOptionItem('2',
    ['Google Pixel XL', 'Pixel', 'Pixel XL'])
    .setTitle('Google Pixel')
    .setDescription('Pixel. Phone by Google.')
    .setImage('', 'Google Pixel')
  )
  // Add last item of the carousel
  .addItems(app.buildOptionItem('1', [])
    .setTitle('Google Allo')
    .setDescription('Introducing Google Allo, a smart messaging app' +
      'that helps you say more and do more.')
    .setImage('', 'Google Allo Logo')
    .addSynonyms('Allo')
  )
  assistant.askWithCarousel(googleAssistant);
};

module.exports.BuildRichResponse=funResponse;