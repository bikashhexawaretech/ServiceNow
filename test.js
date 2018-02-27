var request = require("request");

function getProfile (cb) {
    request({
     method: 'GET',
     uri: 'https://graph.facebook.com/me ',
     qs: {
      
   access_token: 'EAACEdEose0cBAHgpBzq28nZA3m6RtXyZAxN0Fl7D0I7x5VK8oKhsZAXaRq1MgfEUmDVgbQZBOJ7SZAYNSnZCxKIpfz2Vuhg1i3PJEBWF36H91ZCZC5ERHaE6ZBs34dyrbHmMZA4qg5bfg6pGDaEazX68Ira4lAIIMcZC0f9hT2XTAlsSCztkZAZBsmtsAs7chrrvPT3mGDIqyR7kHGQZDZD'
   },
    json: true
    }, (err, res, body) => {
     if (err) return cb(err)
     if (body.error) return cb(body.error)
     cb(null, body)
    })
   }

   getProfile( function abc(err,res){
       console.log(res);
   })

   var json = JSON.parse({
    speech:'hi',
    displayText: 'hi',
    source:''
       
   
  });
  console.log(json);  
  res.json(json);