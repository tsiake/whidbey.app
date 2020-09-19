let link="test"

const mailjet = require ('node-mailjet')
.connect('b55fc52971d2ae0356b43d9b82f946bd', 'cb083790d5a37e7137f7e23cc3645941')
const request = mailjet
.post("send", {'version': 'v3.1'})
.request({
  "Messages":[
    {
      "From": {
        "Email": "noreply@whidbey.app",
        "Name": "Zach"
      },
      "To": [
        {
          "Email": "zach.noble.smith@gmail.com",
          "Name": "Zach"
        }
      ],
      "Subject": "Verify your Whidbey.app account",
      "TextPart": ">Please confirm your whidbey.app email by clicking here.  If the above link doesn't work, paste this link into your browser's URL: https://whidbey.app/confirm/"+link,
      "HTMLPart": "<b><a href='https://whidbey.app/confirm/" + link + "'>Please confirm your whidbey.app email by clicking here.</a><br/> If the above link doesn't work, paste this link into your browser's URL: https://whidbey.app/confirm/"+link+"</b>",
    }
  ]
})

