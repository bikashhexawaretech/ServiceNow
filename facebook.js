

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
                 "attachment":{
                   "type":"template",
                   "payload":{
                     "template_type":"list",
                     "top_element_style":"large",
                     "elements":[
                       {
                         "title":"Chatfuel Rockets T-Shirt",
                         "image_url":"http://rockets.chatfuel.com/img/shirt.png",
                         "subtitle":"Soft white cotton t-shirt with CF Rockets logo",
                         "buttons":[
                           {
                             "type":"web_url",
                             "url":"https://rockets.chatfuel.com/store/shirt",
                             "title":"View Item"
                           }
                         ]
                       },
                       {
                         "title":"Chatfuel Rockets Hoodie",
                         "image_url":"http://rockets.chatfuel.com/img/hoodie.png",
                         "subtitle":"Soft gray cotton t-shirt with CF Rockets logo",
                         "buttons":[
                           {
                             "type":"web_url",
                             "url":"https://rockets.chatfuel.com/store/hoodie",
                             "title":"View Item"
                           }
                         ]
                       }
                     ]
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



  