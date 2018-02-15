let ActionsSdkApp = require('actions-on-google').DialogflowApp;

var funResponse= function buildRichResponse(req, res) {
  const assistant = new ActionsSdkApp({request: req, response: res});

var googleAssistant = assistant.buildRichResponse()
    
.addSimpleResponse('This is a simple response for a list')
.addSuggestions(
  ['Basic Card', 'List', 'Carousel', 'Suggestions'])

  assistant.buildList('List Title')
  .addItems(assistant.buildOptionItem('title',
    ['synonym of title 1', 'synonym of title 2', 'synonym of title 3'])
    .setTitle('Title of First List Item')
    .setDescription('This is a description of a list item')
    .setImage('https://www.synonyms.net/root/app_common/img/top_logo_syn.png', 'Image alternate text'))
  
  .addItems(assistant.buildOptionItem('googleHome',
    ['Google Home Assistant', 'Assistant on the Google Home'])
    .setTitle('Google Home')
    .setDescription(`Google Home is a voice-activated speaker powered by
      the Google Assistant.`)
    .setImage('https://multimedia.bbycastatic.ca/multimedia/products/500x500/107/10721/10721100.jpg', 'Google Home')
  )
  
  .addItems(assistant.buildOptionItem('googlePixel',
    ['Google Pixel XL', 'Pixel', 'Pixel XL'])
    .setTitle('Google Pixel')
    .setDescription('Pixel. Phone by Google.')
    .setImage('https://www.eglobaldigitalcameras.com.au/images/detailed/37/google-pixel-128gb-black.jpg', 'Google Pixel')
  )
   
  .addItems(assistant.buildOptionItem('googleAllo', [])
    .setTitle('Google Allo')
    .setDescription('Introducing Google Allo, a smart messaging app' +
      'that helps you say more and do more.')
    .setImage('https://allo.google.com/images/allo-logo.png', 'Google Allo Logo')
    .addSynonyms('Allo')
  )
  assistant.askWithList(googleAssistant);
};