var express = require('express');
var router = express.Router();

// this route handles account verification from clicking link after registration
router.post('/confirm', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var User = require('/etc/whidbey.io/server/models/user_model.js');
  var Profile = require('/etc/whidbey.io/server/models/profile_model.js');

  var found = User.find({conf_link: req.body.confUrl}).limit(1);
  found.then((x, err) => {

    var newProfile = new Profile({uname: x[0].uname});
    var userProfile = Profile.find({uname: x[0].uname});

    userProfile.then((y, err) => {
      if(!y[0]) {
        newProfile.save();
      } else {
        y[0].uname = x[0].uname;
        y[0].save();
      }
    });

    x[0].verified = true;
    x[0].save();
    res.send({success: true});
  });
}));

module.exports = router;
