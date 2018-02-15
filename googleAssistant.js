 

const DialogflowApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});


//Simple Text

/*
var googleAssistant = assistant.buildRichResponse()
.addSimpleResponse({speech: 'Simple Text Speech Testing By Bikash',
  displayText: 'Simple Text Display'});
  */


  //Suggestion Chips

  
  /*
  var googleAssistant = assistant.buildRichResponse()
  .addSimpleResponse({speech: 'Simple Text Speech',
    displayText: 'Simple Text Display'})
    .addSimpleResponse({
      speech: 'Suggestion Chips',
      displayText: 'Suggestion Chips'})
    .addSuggestions(
      ['Basic Card', 'List', 'Carousel', 'Suggestions']);
 
  */

  //Basic Card
  
  /*
 
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

*/

        var googleAssistant = assistant.buildRichResponse()
        .addItems(assistant.buildOptionItem('MATH_AND_PRIME',
   ['math', 'math and prime', 'prime numbers', 'prime'])
   .setTitle('Math & prime numbers')
   .setDescription('42 is an abundant number because the sum of its ' +
     'proper divisors 54 is greater…')
   .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Math & prime numbers'))

   .addItems(assistant.buildOptionItem('EGYPT',
   ['religion', 'egpyt', 'ancient egyptian'])
   .setTitle('Ancient Egyptian religion')
   .setDescription('42 gods who ruled on the fate of the dead in the ' +
     'afterworld. Throughout the under…')
   .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Egypt')
 )

 .addItems(assistant.buildOptionItem('RECIPES',
   ['recipes', 'recipe', '42 recipes'])
   .setTitle('42 recipes with 42 ingredients')
   .setDescription('Here\'s a beautifully simple recipe that\'s full ' +
     'of flavor! All you need is some ginger and…')
   .setImage('https://static.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg', 'Recipe')
 );
     
  assistant.ask(googleAssistant);

  
} 

 
 module.exports.BuildRichResponse=funResponse;