var request = require("request");

function getProfile (cb) {
    request({
     method: 'GET',
     uri: 'https://graph.facebook.com/me',
     qs: {
      
   access_token: 'EAACEdEose0cBADjrLL4irKQ5jJJAMtqAZBpWilFTRRZCiorZC5H37wvNypUZAF5ohBCvJOaDzvCFGWPR83dhIa1aQtkHiq9yx56bLT0qfK3soRTYHqn8s99uAMWaAbgIJZCijcWpvRZBcWitadTdpBuq5GAzeKgRnKRhOZBhLuXKjrlnVjkN20GWQ97gtHXjYQZD'
   },
    json: true
    }, (err, res, body) => {
     if (err) return cb(err)
     if (body.error) return cb(body.error)
     cb(null, body)
    })
   }

   getProfile( function abc(err,res){
       console.log(res);
   })