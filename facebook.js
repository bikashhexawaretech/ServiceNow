

  function fbQuickReply(){
    var facebookResponse={
        "speech": "",
      "messages": [
        {
          "type": 1,
          "platform": "facebook",
          "title": "Select Category",
          "subtitle": "",
          "imageUrl": "http://www.cromacampus.com/wp-content/uploads/2017/05/servicenow-tool-training.png",
          "buttons": [
            {
              "text": "Hardware",
              "postback": "Hardware"
            },
            {
              "text": "Software",
              "postback": "Software"
            },
            {
              "text": "Network",
              "postback": "Network"
            }
          ]
        }
        
        
      ]
     }
     return facebookResponse;
  }
  module.exports.fbQuickReply=fbQuickReply;