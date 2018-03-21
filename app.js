var request = require("request");
var fs = require("fs");
const mongoose = require('mongoose');
let uri = 'mongodb://bikash:12345@ds119969.mlab.com:19969/servicenow';

mongoose.connect(process.env.MONGODB_URI);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

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
  db.once('open', function callback() {
      let ChatHistorySchema = mongoose.Schema({
        User: String,
        message: String,
        botResponse: String
      });
       
      let Chat = mongoose.model('chats', ChatHistorySchema);
      let chat1 = new Chat({
        User: user,
        message: message,
        botResponse: botResponse
   
      });
    
    
      Chat.insertMany(chat1).
      catch(err => {
        console.log(err)});
    })
}
module.exports.logChatHistory=logChatHistory;
module.exports.logMongoChatHistory=logMongoChatHistory;

 