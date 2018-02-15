 /*

const DialogflowApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new DialogflowApp({request: req, response: res});


//Simple Text

var googleAssistant = assistant.buildRichResponse()
.addSimpleResponse({speech: 'Simple Text Speech Testing By Bikash',
  displayText: 'Simple Text Display'});
  


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


  
     
  assistant.ask(googleAssistant);

  const WELCOME_INTENT = 'input.welcome';  
  const NUMBER_INTENT = 'input.number';  
  const NUMBER_ARGUMENT = 'input.mynum'; 

} */  

 
 let ActionsSdkApp = require('actions-on-google').ActionsSdkApp;

 /*var funResponse =  {
   const app = new ActionsSdkApp({request: req, response: res});
 console.log(req.body);
 
 app.askWithCarousel('Alright! Here are a few things you can learn. Which sounds interesting?',
 // Build a carousel
 app.buildCarousel()
 // Add the first item to the carousel
 .addItems(app.buildOptionItem('MATH_AND_PRIME',
   ['math', 'math and prime', 'prime numbers', 'prime'])
   .setTitle('Math & prime numbers')
   .setDescription('42 is an abundant number because the sum of its ' +
     'proper divisors 54 is greater…')
   .setImage('http://example.com/math_and_prime.jpg', 'Math & prime numbers'))
 // Add the second item to the carousel
 .addItems(app.buildOptionItem('EGYPT',
   ['religion', 'egpyt', 'ancient egyptian'])
   .setTitle('Ancient Egyptian religion')
   .setDescription('42 gods who ruled on the fate of the dead in the ' +
     'afterworld. Throughout the under…')
   .setImage('http://example.com/egypt', 'Egypt')
 )
 // Add third item to the carousel
 .addItems(app.buildOptionItem('RECIPES',
   ['recipes', 'recipe', '42 recipes'])
   .setTitle('42 recipes with 42 ingredients')
   .setDescription('Here\'s a beautifully simple recipe that\'s full ' +
     'of flavor! All you need is some ginger and…')
   .setImage('http://example.com/recipe', 'Recipe')
 )

 );
 };*/
 
 var funResponse = {
  BuildRichResponse: function(req, res){
    const app = new ActionsSdkApp({request: req, response: res});
    console.log(req.body);
    
    app.askWithCarousel('Alright! Here are a few things you can learn. Which sounds interesting?',
    // Build a carousel
    app.buildCarousel()
    // Add the first item to the carousel
    .addItems(app.buildOptionItem('MATH_AND_PRIME',
      ['math', 'math and prime', 'prime numbers', 'prime'])
      .setTitle('Math & prime numbers')
      .setDescription('42 is an abundant number because the sum of its ' +
        'proper divisors 54 is greater…')
      .setImage('http://example.com/math_and_prime.jpg', 'Math & prime numbers'))
    // Add the second item to the carousel
    .addItems(app.buildOptionItem('EGYPT',
      ['religion', 'egpyt', 'ancient egyptian'])
      .setTitle('Ancient Egyptian religion')
      .setDescription('42 gods who ruled on the fate of the dead in the ' +
        'afterworld. Throughout the under…')
      .setImage('http://example.com/egypt', 'Egypt')
    )
    // Add third item to the carousel
    .addItems(app.buildOptionItem('RECIPES',
      ['recipes', 'recipe', '42 recipes'])
      .setTitle('42 recipes with 42 ingredients')
      .setDescription('Here\'s a beautifully simple recipe that\'s full ' +
        'of flavor! All you need is some ginger and…')
      .setImage('http://example.com/recipe', 'Recipe')
    )
   
    ); 
  } 
 };
 
 //module.exports.BuildRichResponse=funResponse;
 module.exports = funResponse;