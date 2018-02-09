
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

// Simple text sent to FB

if( req.body.result.action=== "Incident_Status_Check"){
    var IncidentNumber=req.body.result.parameters.IncidentNumber;
    if(IncidentNumber.indexOf('INC') == -1)
    {
      var str='INC';
      IncidentNumber=str.concat(IncidentNumber);
    }
    inc.statusIncident(IncidentNumber,function(err,resu){
      var JSONOBJ=JSON.parse(resu);
     
      console.log("Result Check "+JSONOBJ.hasOwnProperty("result"));
     
      var flag=false;
      
        var output='Incorrect Incident number: '+IncidentNumber;
        if(JSONOBJ.hasOwnProperty("result"))
        {
            output='';
            output+="Incident number "+IncidentNumber+" has been found ";
            output+="Description: "+JSONOBJ.result[0].short_description+" ";
            output+="Created under: "+JSONOBJ.result[0].category+" ";
            output+="Urgency: "+JSONOBJ.result[0].urgency+" ";
        }
        
      return res.json({
        speech:output,
        displayText: output,
        source:'',
          followupEvent: {
             "name": "eventProceed",
             "data": {
                 "Incident":IncidentNumber
             }
          }
       
      });
    })
     
      
     


}
});


/*

if( req.body.result.action=== "Incident_Status_Check"){
  var IncidentNumber=req.body.result.parameters.IncidentNumber;
  if(IncidentNumber.indexOf('INC') == -1)
  {
    var str='INC';
    IncidentNumber=str.concat(IncidentNumber);
  }
  inc.statusIncident(IncidentNumber,function(err,resu){
    var JSONOBJ=JSON.parse(resu);
   
    console.log("Result Check "+JSONOBJ.hasOwnProperty("result"));
   
    facebookResponse={
      "speech": "",
      "messages": [
        {
          "type": 4,
          "platform": "facebook",
          "payload": {
            "facebook": {
              "attachment": {
                "type": "template",
                "payload": {
                  "template_type": "receipt",
                  "recipient_name": "Stephane Crozatier",
                  "order_number": "12345678902",
                  "currency": "USD",
                  "payment_method": "Visa 2345",
                  "order_url": "http://petersapparel.parseapp.com/order?order_id=123456",
                  "timestamp": "1428444852",
                  "address": {
                    "street_1": "1 Hacker Way",
                    "street_2": "",
                    "city": "Menlo Park",
                    "postal_code": "94025",
                    "state": "CA",
                    "country": "US"
                  },
                  "summary": {
                    "subtotal": 75,
                    "shipping_cost": 4.95,
                    "total_tax": 6.19,
                    "total_cost": 56.14
                  },
                  "adjustments": [
                    {
                      "name": "New Customer Discount",
                      "amount": 20
                    },
                    {
                      "name": "$10 Off Coupon",
                      "amount": 10
                    }
                  ],
                  "elements": [
                    {
                      "title": IncidentNumber,
                      "subtitle": JSONOBJ.result[0].short_description,
                      "quantity": 2,
                      "price": 50,
                      "currency": "USD",
                      "image_url": "http://petersapparel.parseapp.com/img/whiteshirt.png"
                    } 
                  ]
                }
              }
            }
          }
        },
        {
          "type": 0,
          "speech": "Hi!"
        }
      ]
    
   }
   return res.json(facebookResponse);

  
  })
   
    
 

}
});

*/
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



  



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
