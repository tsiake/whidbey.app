var express = require('express');
var router = express.Router();

// this route handles account verification from clicking link after registration
router.post('/confirm', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var User = require('/etc/whidbey.io/server/models/user_model.js');
  var found = User.find({conf_link: req.body.confUrl}).limit(1);
  found.then((x, err) => {
    console.log('User entry accessed'); // remove after testing
    x[0].verified = true;
    x[0].save();
  });
}));

module.exports = router;
