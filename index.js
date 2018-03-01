
'use strict';
var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;
var inc = require('./app.js');
var config = require('./config');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var facebook=require('./facebook.js');
app.use(express.static('public'));
 
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const strategy = new Auth0Strategy(
  {
      domain: config.authODomain,
      clientID: config.authOClientId,
      clientSecret: config.authOClientSecretKey,
      callbackURL:config.authOCallbackUrl
  },
  function (accessToken, refreshToken, extraParams, profile, done) {
      // accessToken is the token to call Auth0 API (not needed in the most cases)
      // extraParams.id_token has the JSON Web Token
      // profile has all the information from the user
      return done(null, profile);
  }
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

// you can use this section to keep a smaller payload
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
    done(null, user);
});


 app.get('/',function(req,res){
   res.redirect('/authorize');
 
  res.end();
   
 })

 app.get('/authorize', passport.authenticate('auth0', {
  clientID: config.authOClientId,
  domain: config.authODomain,
  redirectUri: config.authOCallbackUrl,
  responseType: 'code',
  audience: 'https://' + config.authODomain + '/userinfo',
  scope: 'openid profile'
}));

app.get('/callback', passport.authenticate('auth0', {
}), 
	function (req, res) {
	console.log('Inside auth');
   console.log(res);
 

	 
  });

app.post('/servicenow',function(req,res){
    var facebookResponse='';
    var googleResponse='';
   
    //Quick Replies
 
    
  
      if(req.body.result.action==='IncidentRequestAction'){
 
        return res.json(facebook.fbWebView());
     

    /*
  inc.getProfile(function (err,rees){
    return res.json({
      speech:rees.name,
      displayText: rees.name,
      source:''
         
     
    });
  
})
      */
      }
      
      if( req.body.result.action=== "IncidentWebCall"){
      
        console.log('Inside Web call');
        inc.logIncident(req.body.result.parameters.desc,req.body.result.parameters.severity,req.body.result.parameters.entityCategory,function(err,resu){
          console.log('Outside');
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
     
      
     


}
});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
});
