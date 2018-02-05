var inc=require('./app.js');



/*inc.statusIncident('INC0010873',function(err,res){
    
    console.log(res);
    
});*/


var request = require('http');
var express=require('express');
var bodyParser = require('body-parser');
var app = express();
var portC = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

   app.post('/',function(req,res){
      console.log('Received the request & it is:::'+JSON.stringify(req.body));
      if(req.body.result.action=='BookFlight'){
       
        inc.logIncident('Bikash Panigrahi','',function(err,res)
        {
        console.log(res["result"]["number"]);
      
        });
      var resagent='Your Ticket has been booked successfully '+res["result"]["number"];
     console.log('request are'+resagent);
      return res.json({
        speech:resagent,
        displayText: resagent,
        source:'Flight Booking'
      });


    }

});



app.listen(portC, function(){
    console.log('AGENT is running my app on  PORT: ' + portC);
}); 

