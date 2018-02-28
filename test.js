var facebookAuthEndpoint = "https://www.facebook.com/v2.10/dialog/oauth";
var responseType = "token";
var clientId = "173489109936826";  
var redirectUrl = "http://travelbuddyapp.com:8080/callback.html";
var scope = "public_profile user_friends";


var userEndpoint = "https://graph.facebook.com/v2.10/me?fields=name&access_token="+ accessToken;
  var userId = "";
  //ajax GET call to get user ID
  $.get(userEndpoint, function(data, status){
    userId = data.id;
      var friendListEndpoint = "https://graph.facebook.com/v2.10/" + userId + 
"/friends?access_token=" + accessToken;
      $.get(friendListEndpoint, function(data, status){
            $("#response").html(JSON.stringify(data));
      });
  });