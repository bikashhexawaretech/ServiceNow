
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
    var facebookResponse='';
 if(req.body.result.action==='IncidentRequestAction'){

      facebookResponse={
        "speech": "",
      "messages": [
        {
          "type": 1,
          "platform": "facebook",
          "title": "Select Category",
          "subtitle": "",
          "imageUrl": "http://www.cromacampus.com/wp-content/uploads/2017/05/servicenow-tool-training.png",
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
    
   /* if( req.body.result.action=== "Incident_Request.Incident_Request-custom" ){
     
         facebookResponse={
           "speech": "",
           "messages": [
             {
               "type": 2,
               "platform": "facebook",
               "title": "Select Urgency",
               "replies": [
                 "High",
                 "Low",
                 "Medium"
               
               ]
             },
             {
               "type": 0,
               "speech": ""
             }
           ]
        }
        return res.json(facebookResponse);
}*/
/*else
if( req.body.result.action=== "Incident_Request.Incident_Request-custom" && req.body.result.parameters.entityCategory==='Software'){
     facebookResponse={
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
     facebookResponse={
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
}*/


  if( req.body.result.action=== "IncidentWebCall"){
    
 
      inc.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,req.body.result.parameters.entityCategory,function(err,resu){
        console.log(req.body.result.parameters.desc);
          var resagent=resu["result"].number+" With Description "+req.body.result.parameters.desc+"  logged Successfully. Is there anything I can help you with?";
          
          return res.json({
            speech:resagent,
            displayText: resagent,
            source:''
          });
  })
   
}

if( req.body.result.action=== "Incident_Status_Check"){
    var IncidentNumber=req.body.result.parameters.IncidentNumber;
 
    if(IncidentNumber.indexOf(substring) == -1)
    {
      var str='INC';
      IncidentNumber=str.concat(IncidentNumber);
    }
    console.log(IncidentNumber);
     
      
      return res.json({
        speech:IncidentNumber,
        displayText: IncidentNumber,
        source:''
      });
})

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
