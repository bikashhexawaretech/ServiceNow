

 var fbQuickReply =function fbQuick(){
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


  var fbCard =function Card(){
    var facebookResponse={
        "speech": "",
      "messages": [
        {
            "type": 1,
            "platform": "facebook",
            "title": "Service Now",
            "subtitle": "Service Now",
            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMtsITwe5WS-AQVOvxrB3ZZ14_l2lLei0J6oOFYtHjLqv6oyxEA",
            "buttons": [
              {
                "text": "Create an Incident",
                "postback": "Create an Incident"
              },
              {
                "text": "Status Of Incident",
                "postback": "Status Of Incident"
              }
            ]
        }
        
        
      ]
     }
     return facebookResponse;
  }



  module.exports.fbQuickReply=fbQuickReply;
  module.exports.fbCard=fbCard;