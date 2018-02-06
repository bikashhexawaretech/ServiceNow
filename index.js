
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var inc = require('./app.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.post('/',function(req,res){
    console.log('Received the request & it is:::'+JSON.stringify(req.body));

 if(req.body.result.action==='IncidentRequestAction'){

     var facebookResponse={
        "speech": "",
      "messages": [
        {
          "type": 1,
          "platform": "facebook",
          "title": "Select Category",
          "subtitle": "",
          "imageUrl": "https://www.google.co.in/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          "buttons": [
            {
              "text": "Hardware",
              "postback": "Hardware"
            },
            {
              "text": "Software",
              "postback": "Software"
            },
            {
              "text": "Network",
              "postback": "Network"
            }
          ]
        },
        {
          "type": 0,
          "speech": ""
        }
      ]
     }
     return res.json(facebookResponse);
    }
    if( req.body.result.action=== "Incident_Request.Incident_Request-custom" && req.body.result.parameters.entityCategory==='Hardware'){
        var facebookResponse={
           "speech": "",
           "messages": [
             {
               "type": 2,
               "platform": "facebook",
               "title": "Select Sub Categories",
               "replies": [
                 "CPU",
                 "DISK",
                 "Keyboard",
                 "Mouse"
               ]
             },
             {
               "type": 0,
               "speech": ""
             }
           ]
        }
        return res.json(facebookResponse);
}
else
if( req.body.result.action=== "Incident_Request.Incident_Request-custom" && req.body.result.parameters.entityCategory==='Software'){
    var facebookResponse={
       "speech": "",
       "messages": [
         {
           "type": 2,
           "platform": "facebook",
           "title": "Select Sub Categories",
           "replies": [
             "Email",
             "OS" 
           ]
         },
         {
           "type": 0,
           "speech": ""
         }
       ]
    }
    return res.json(facebookResponse);
}
 else
 if( req.body.result.action=== "Incident_Request.Incident_Request-custom" && req.body.result.parameters.entityCategory==='Network'){
    var facebookResponse={
       "speech": "",
       "messages": [
         {
           "type": 2,
           "platform": "facebook",
           "title": "Select Sub Categories",
           "replies": [
             "DHCP",
             "DNS",
             "VPN" 
           ]
         },
         {
           "type": 0,
           "speech": ""
         }
       ]
    }
    return res.json(facebookResponse);
}


  if( req.body.result.action=== "WebCallAction"){
 /* inc.logIncident("Test Description","",function(err,res){
    var resagent="Incident logged Successfully";
    console.log(resagent);
     return res.json({
       speech:resagent,
       displayText: resagent,
       source:'Flight Booking'
     }); 
  })*/
  var resagent="Success";
    console.log('request are'+resagent);
     return res.json({
       speech:resagent,
       displayText: resagent,
       source:''
     }); 
}
});


/*
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
