
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var inc = require('./app.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var fs = require("fs");

app.get('/log',function(req,res){

  fs.readFile('logs.txt',function(err,data){
if(err)
console.log('error');
else
    res.end(data);
  })
})
 
app.post('/',function(req,res){
    var facebookResponse='';
    var googleResponse='';
   

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
          }
          
          
        ]
       }
       inc.logMongoChatHistory(req.body.sessionId,req.body.result.resolvedQuery,facebookResponse.messages[0].title);
       return res.json(facebookResponse);
      }
      
      if( req.body.result.action=== "IncidentWebCall"){
        inc.logMongoChatHistory(req.body.sessionId,req.body.result.parameters.entityContactType,'Enter Description'); 

inc.logMongoChatHistory(req.body.sessionId,req.body.result.parameters.desc,'Enter Severity'); 
inc.logMongoChatHistory(req.body.sessionId,req.body.result.parameters.severity,'Incident Created Successfully'); 


var resagent="Incident logged Successfully.";
            
return res.json({
  speech:resagent,
  displayText: resagent,
  source:''
});

/*
        inc.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,req.body.result.parameters.entityCategory,function(err,resu){
          console.log("Severity :"+req.body.result.parameters.severity);
            var resagent=resu["result"].number+" logged Successfully.";
            
            return res.json({
              speech:resagent,
              displayText: resagent,
              source:'',
              followupEvent: {
                "name": "eventSuccessProceed",
                "data": {
                    "Incident":resu["result"].number,
                    "Description":req.body.result.parameters.desc,
                    "Category":req.body.result.parameters.category,
                    "Urgency":req.body.result.parameters.urgency
                }
             }
            });
            
    })
   */
    }
  
   

// Simple text sent to FB

if( req.body.result.action=== "Incident_Status_Check"){
    var IncidentNumber=req.body.result.parameters.IncidentNumber;
    if( /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$/.test( IncidentNumber ) || /[0-9]|\./.test(IncidentNumber))
    {

   
    if(IncidentNumber.indexOf('INC') == -1 )
    {
      
      var str='INC';
      IncidentNumber=str.concat(IncidentNumber);
    }
    inc.statusIncident(IncidentNumber,function(err,resu){
      var JSONOBJ=JSON.parse(resu);
     
        var output='Unable to retreive any details for: '+IncidentNumber;
        if(JSONOBJ.hasOwnProperty("result"))
        {
            output='';
            output+="Incident number "+IncidentNumber+" has been found ";
            output+="Description: "+JSONOBJ.result[0].short_description+" ";
            output+="Created under: "+JSONOBJ.result[0].category+" ";
            output+="Urgency: "+JSONOBJ.result[0].urgency+" ";
           
            return res.json({
              speech:output,
              displayText: output,
              source:'',
                followupEvent: {
                   "name": "eventSuccessProceed",
                   "data": {
                       "Incident":IncidentNumber,
                       "Description":JSONOBJ.result[0].short_description,
                       "Category":JSONOBJ.result[0].category,
                       "Urgency":JSONOBJ.result[0].urgency
                   }
                }
             
            });
        }
        else
        {
          
          return res.json({
            speech:output,
            displayText: output,
            source:'',
              followupEvent: {
                 "name": "eventFailProceed",
                 "data": {
                     "Incident":IncidentNumber
                 }
              }
           
          });
        }
        
      
    })
  }
  else
  {
    return res.json({
      speech:"",
      displayText: "",
      source:'',
        followupEvent: {
           "name": "eventValidIncident",
           "data": {
                
           }
        }
     
    });
  }
     
      
     
  inc.logMongoChatHistory(req.body.sessionId,req.body.result.resolvedQuery,req.body.result.fulfillment.speech); 


}
if( req.body.result.action=== "input.welcome"){
  inc.logMongoChatHistory('15','15','15');
  inc.logMongoChatHistory(req.body.sessionId,req.body.result.resolvedQuery,req.body.result.fulfillment.speech); 
}
if( req.body.result.action=== "Action1"){
  if(req.body.result.fulfillment.speech=="")
  inc.logMongoChatHistory(req.body.sessionId,req.body.result.resolvedQuery,req.body.result.fulfillment.messages[0].title); 
  else
  inc.logMongoChatHistory(req.body.sessionId,req.body.result.resolvedQuery,req.body.result.fulfillment.speech); 
}
});

app.get('/',function(req,res){
  res.sendFile('public/success.html' , { root : __dirname});
})

app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});

