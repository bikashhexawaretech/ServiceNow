var facebookAuthEndpoint = "https://www.facebook.com/v2.10/dialog/oauth?";
var clientId = "173489109936826";  //service now
var redirectUrl = "https://servicenowhex.herokuapp.com/";
var url=facebookAuthEndpoint+'app_id='+clientId+'&redirect_uri='+redirectUrl;

console.log(url);