var fs = require("fs");
function logChatHistory(user, message,botResponse) {
  
  var log = "User "+user + ": " + message + "\n";
  log += "Bot: " + botResponse + "\n\n";
/*
  fs.appendFile("logs.txt", log, function(err) {

    console.log(err);
  });
  */
 var stream = fs.createWriteStream('logs.txt', {flags: 'a'});
stream.write(log, function() {
  // Now the data has been written.
});

  
} 

logChatHistory('user','hi','hey');