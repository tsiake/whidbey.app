var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var fs = require('fs');
const nodemailer = require('nodemailer');

var userSchema = mongoose.Schema({
  uname: String,
  upass: String,
  verified: { type: Boolean, default: false }, // see if account has verified their account through email
  conf_link: String // conf link to click if their account isn't verified
});

userSchema.methods = {

  auth: function(passPlaintext) {
    return !passPlaintext ? '' : bcrypt.compare(passPlaintext, this.upass);
  },

  encryptPass: function(passPlaintext) {
    return !passPlaintext ? '' : bcrypt.hash(passPlaintext, 10);
  },

  sendVerificationMail: function(email, link) {
    const mailjet = require ('node-mailjet')
    .connect(process.env.REACT_APP_CLIENT_ID, process.env.REACT_APP_CLIENT_KEY)
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
  }
}

module.exports = mongoose.model('User', userSchema, 'users');
