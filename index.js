
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var data = require('./data.json');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




/*app.post('/',function(req,res){
    console.log('Received the request & it is:::'+JSON.stringify(req.body));

 if(req.body.result.action==='Incident_Request.Incident_Request-custom'){
    var facebookResponse={
        "speech": "",
        "displayText": " Your Incident has been raised",
        "data": {
          "facebook": {

            "attachment": {
                  "type": "template",
                  "payload": {
                  "template_type": "generic",
                  "elements": [
                    {
                      "title": "Select SubCategory",
                      "subtitle": '',
                      "buttons": [
                        {
                          "type": "postback",
                          "title": "CPU",
                          "payload": "CPU"
                        },
                        {
                          "type": "postback",
                          "title": "Keyboard",
                          "payload": "Keyboard"
                        }
                      ]
                    }
                  ]
                }
              }
            }
          },
      
        };

return res.json(facebookResponse);
 
    } 
});*/

    //Not working
    app.post('/',function(req,res){
        console.log('Received the request & it is:::'+JSON.stringify(req.body));

   if(req.body.result.action==='Incident_Request.Incident_Request-custom'){
        let subCategories = data.subCategories[req.body.result.parameters.entityCategory];
let resObj = {"speech": "Please select SubCategory from the following",
"messages": [
{
"type": 2,
"platform": "facebook",
"title": "Enter Sub Category",
"replies": subCategories
}]
};
return res.json(resObj);
     
        } 

    });


//Not working

// Current running code Begin

/*app.post('/',function(req,res){
    console.log('Received the request & it is:::'+JSON.stringify(req.body));

if(req.body.result.action==='Incident_Request.Incident_Request-custom'){
    var resagent="Success";
    console.log('request are'+resagent);
     return res.json({
       speech:resagent,
       displayText: resagent,
       source:'Flight Booking'
     }); 
}
}) */

// Current running code End

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
