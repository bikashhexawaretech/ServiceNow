var inc = require('./app.js');
let inn=''
inc.logIncident("Test Description","",function(err,res){
    
    inn= res.result.number;
   });
   console.log(inn);