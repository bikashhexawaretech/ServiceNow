var request = require("request");

module.exports = {
    'logIncident' : function(desc, severity,category, callback){

        console.log("Post");
        var options = { method: 'POST',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          headers:
           { 'postman-token': 'd6253bf3-ff31-fb21-7741-3dd02c84e8bb',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json' },
          body:
           { short_description: desc,
             caller_id: 'Pourab Karchaudhuri',
             urgency: severity ,
             comments: 'Chatbot Testing',
            category:category
           },
          json: true };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

         // console.log("Success : "+body);
          callback(null, body);
        });
    },
    'statusIncident' : function(ticketnumber, callback){

        console.log("Get");
        var options = { method: 'GET',
          url: 'https://dev18442.service-now.com/api/now/v1/table/incident',
          qs: { number: ticketnumber },
          headers:
           { 'postman-token': '5441f224-d11a-2f78-69cd-51e58e2fbdb6',
             'cache-control': 'no-cache',
             authorization: 'Basic MzMyMzg6YWJjMTIz',
             'content-type': 'application/json'  } };

        request(options, function (error, response, body) {
          if (error) throw new Error(error);

          //console.log("Success : "+body);
          callback(null, body);
        });
    }

}


function getProfile (cb) {
  request({
   method: 'GET',
   uri: 'https://graph.facebook.com/me',
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

 module.exports.getProfile=getProfile;