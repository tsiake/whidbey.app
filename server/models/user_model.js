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
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        let mailOptions = {
            from: '"The whidbey.io team" <' + process.env.EMAIL + '>',
            to: email,
            subject: "Please confirm whidbey.io account email",
            text: "Hello, please confirm your email by clicking the following link: https://whidbey.io/confirm/"+link,
            html: "<b>Hello, please confirm your email by clicking the following link: <br/> https://whidbey.io/confirm/"+link+"</b>"
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                fs.writeFile("/var/log/whidbey.io/error.log", "User email: " + email + "\nError:" + error + "\n**********", function(err) {
                    if(err) {
                        return console.log("Had trouble writing error log: " + err);
                    } else {
                        console.log("error log saved");
                    }
                });
            }
        })
    }
};

module.exports = mongoose.model('User', userSchema, 'users');
