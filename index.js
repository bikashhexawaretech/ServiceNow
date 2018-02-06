
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.post('/',function(req,res){
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
                      "title": "Booking Successful",
                      "subtitle": 'Your Incident has been raised',
                      "buttons": [
                        {
                          "type": "postback",
                          "title": "Book Another Ticket",
                          "payload": "book_ticket"
                        },
                        {
                          "type": "postback",
                          "title": "Contact Us",
                          "payload": "contact_us"
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
});

// Current running code Begin

/*app.post('/',function(req,res){
    console.log('Received the request & it is:::'+JSON.stringify(req.body));

if(req.body.result.action==='Incident_Request.Incident_Request-custom'){
    var resagent="success";
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
