
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var data = require('./data.json');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/',function(req,res){
    console.log('Received the request & it is:::'+JSON.stringify(req.body));

 if(req.body.result.action==='Incident_Request.Incident_Request-custom'){
     var facebookResponse={
        "message": {
            "attachment": {
              "type": "template",
              "payload": {
                "template_type": "list",
                "top_element_style": "compact",
                "elements": [
                  {
                    "title": "Classic T-Shirt Collection",
                    "subtitle": "See all our colors",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/collection.png",          
                    "buttons": [
                      {
                        "title": "View",
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/collection",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"            
                      }
                    ]
                  },
                  {
                    "title": "Classic White T-Shirt",
                    "subtitle": "See all our colors",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://peterssendreceiveapp.ngrok.io/view?item=100",
                      "messenger_extensions": false,
                      "webview_height_ratio": "tall"
                    }
                  },
                  {
                    "title": "Classic Blue T-Shirt",
                    "image_url": "https://peterssendreceiveapp.ngrok.io/img/blue-t-shirt.png",
                    "subtitle": "100% Cotton, 200% Comfortable",
                    "default_action": {
                      "type": "web_url",
                      "url": "https://peterssendreceiveapp.ngrok.io/view?item=101",
                      "messenger_extensions": true,
                      "webview_height_ratio": "tall",
                      "fallback_url": "https://peterssendreceiveapp.ngrok.io/"
                    },
                    "buttons": [
                      {
                        "title": "Shop Now",
                        "type": "web_url",
                        "url": "https://peterssendreceiveapp.ngrok.io/shop?item=101",
                        "messenger_extensions": true,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://peterssendreceiveapp.ngrok.io/"            
                      }
                    ]        
                  }
                ],
                 "buttons": [
                  {
                    "title": "View More",
                    "type": "postback",
                    "payload": "payload"            
                  }
                ]  
              }
            }
          }
        }
     }
 
});

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
});

*/

    //Not working
 /*   app.post('/',function(req,res){
        console.log('Received the request & it is:::'+JSON.stringify(req.body));

   
        
let resObj = {
    speech: '',
    displayText: "",
    data: {
        "facebook": {
            "text": "",
            "quick_replies": [
                {
                    "content_type": "text",
                    "title": "title",
                    "payload": "payload"
                },
                {
                    "content_type": "text",
                    "title": "title",
                    "payload": "payload"
                }
            ]
        }
    },
    source: 'Servicenow'
}
;
return res.json(resObj);
     
        

    });

    */


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
