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
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "noreply@whidbey.io",
        clientId: process.env.REACT_APP_CLIENT_ID,
        clientSecret: process.env.REACT_APP_CLIENT_SECRET,
        refreshToken: process.env.REACT_APP_REFRESH_TOKEN,
        accessToken: process.env.REACT_APP_ACCESS_TOKEN
      }
    });

    let mailOptions = {
      from: '"The whidbey.io team" <' + process.env.REACT_APP_EMAIL + '>',
      to: email,
      subject: "Please confirm whidbey.io account email",
      generateTextFromHTML: true,
      html: "<b><a href='https://whidbey.io/confirm/" + link + "'>Please confirm your whidbey.io email by clicking here.</a><br/> If the above link doesn't work, paste this link into your browser's URL: https://whidbey.io/confirm/"+link+"</b>"
    }

    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        fs.writeFile("/var/log/whidbey.io/error.log", "User email: " + email + "\nError:" + error + "\n**********", function(err) {
          if(err) {
            return console.log("Had trouble writing error log: " + err);
          } else {
            console.log("error log saved");
          }
        });
      }
      transporter.close();
    })
  }
};

module.exports = mongoose.model('User', userSchema, 'users');
