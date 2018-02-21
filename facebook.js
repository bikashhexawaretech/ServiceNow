

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
                "text": "Hardware",
                "postback": "Hardware"
              },
              {
                "text": "Software",
                "postback": "Software"
              }
            ]
        }
        
        
      ]
     }
     return facebookResponse;
  }


var genTemplate=function genTemplate(){

    var facebookResponse={
        "speech": "",
      "messages": [
        {
            "type": 4,
          "platform": "facebook",
          "payload": {
            "facebook": {
              "attachment": {
                "type": "",
                "payload": {
                  "template_type": "generic",
                  "elements": [
                    {
                      "title": "Welcome!",
                      "image_url": "https://petersfancybrownhats.com/company_image.png",
                      "subtitle": "We have the right hat for everyone.",
                      "default_action": {
                        "type": "web_url",
                        "url": "https://petersfancybrownhats.com/view?item=103",
                        "messenger_extensions": false,
                        "webview_height_ratio": "tall",
                        "fallback_url": "https://petersfancybrownhats.com/"
                      },
                      "buttons": [
                        {
                          "type": "web_url",
                          "url": "https://petersfancybrownhats.com",
                          "title": "View Website"
                        },
                        {
                          "type": "postback",
                          "title": "Start Chatting",
                          "payload": "DEVELOPER_DEFINED_PAYLOAD"
                        }
                      ]
                    }
                  ]
                }
              }
            }
          }
        }
        
        
      ]
     }
     return facebookResponse;
  }

  module.exports.fbQuickReply=fbQuickReply;
  module.exports.fbCard=fbCard;
  module.exports.genTemplate=genTemplate;



  