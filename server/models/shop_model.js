var mongoose = require('mongoose');
var fs = require('fs');
const nodemailer = require('nodemailer');

var shopSchema = mongoose.Schema({
  name: String, // shop name
  desc: String, // Shop description
  city: String,
  street: String,
  zip: String,
  phone: String,
  web: String,
  owner: String, // username of owner
  shop_link: String
// choosing to associate items with the shop id, shop itself will not have knowledge
});

shopSchema.methods = {

  sendShopRegistrationEmail: function(email) {
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
      subject: "Your shop is now registered on Whidbey.io",
      generateTextFromHTML: true,
      html: "<b><a href='https://whidbey.io/shops/" + shop_link + "'>View your registered shop here.</a><br/> If the above link doesn't work, paste this link into your browser's URL: https://whidbey.io/shops/"+shop_link+"</b>"
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

  },

};

module.exports = mongoose.model('shop', shopSchema, 'shops');
