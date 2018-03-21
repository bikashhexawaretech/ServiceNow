var request = require("request");
var fs = require("fs");
const MongoClient  = require('mongodb').MongoClient;;
let uri = process.env.MONGODB_URI;

 

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
            category:category },
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


function logChatHistory(user, message,botResponse) {
  
  var log = "User "+user + ": " + message + "\n";
  log += "Bot: " + botResponse + "\n\n";
 
 var stream = fs.createWriteStream('logs.txt', {flags: 'a'});
stream.write(log, function() {
   
});
} 

function logMongoChatHistory(user, message,botResponse) {

  MongoClient.connect(uri, (err, db) => {
    if (err) {
      return console.log(err);
    }

    // Do something with db here, like inserting a record
    db.collection('chat').insertOne(
      {
        User: user,
        message: message,
        botResponse: botResponse
      },
      function (err, res) {

        if (err) {
          db.close();
          return console.log(err);
        }
        // Success
        db.close();
      }
    )


  });
  
}
module.exports.logChatHistory=logChatHistory;
module.exports.logMongoChatHistory=logMongoChatHistory;

 