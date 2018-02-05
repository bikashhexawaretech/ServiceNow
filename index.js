var app=require('./app.js');

app.logIncident('Bikash Panigrahi','',function(err,res)
{
console.log(res["result"]);
});

app.statusIncident('INC0010873',function(err,res){
    
    console.log(res);
    
});