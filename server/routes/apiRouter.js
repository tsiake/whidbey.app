 // the /api router - contains all /api routes.
var express = require('express');
var router = express.Router();

// other required pkgs
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');

// login API
router.post('/login', ((req, res) => {

  var db = require('/etc/intrepid.cool/server/db/whidbey_db_connec.js');
  var User = require('/etc/intrepid.cool/server/models/user_model.js');
  var loginUser = new User({});

  loginUser.uname = req.body.email;

  var hashpass = loginUser.encryptPass(req.body.pass);
  var thisUser = User.find({uname: loginUser.uname}).limit(1);

  thisUser.then((x, err) => {
    x.length > 0 ? bcompare() /* compare */ : res.send({success: false, username: ''});
  });

  var bcompare = thisUser.then((x, err) => {
    bcrypt.compare(req.body.pass, x[0].upass, function(err, result) {
      // save the session, pass the username to client
      req.session.uname = req.body.email;
      req.session.save();
      res.send({success: true, username: req.body.email});
    });
  });
}));

// logout API
router.post('/logout', ((req, res) => {
  // destroy user session / effectively logging them out
  req.session.destroy();
  res.send({success:true});
}));

// register API
router.post('/register', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');

  var user = new User({ /*uname: req.body.email, upass: user.encryptPass(req.body.pass)*/ });
  var regUser = User.find({uname: req.body.email}).limit(1);

  regUser.then((x, err) => {
    x.length > 0 ? (res.send({ success: false}), console.log('already registered')) : hashThis();
  });

  var hashThis = _ => {
    var hashpass = user.encryptPass(req.body.pass);
    hashpass.then((hash, err) => {
      user.uname = req.body.email;
      user.upass = hash;
      user.conf_link = randstr.generate(10);
      user.save();
      user.sendVerificationMail(req.body.email, user.conf_link);
      res.send({success:true});
    });
  }
}));

// session api - grab username if logged into session
router.get('/session', ((req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.send({user: req.session.uname});
}));

router.get('/profile_load', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var Profile = require('/etc/whidbey.io/server/models/profile_model.js');
  var userProfile = Profile.find({uname: req.session.uname}).lean();
  userProfile.then((x, err) => {
    x.length > 0 ? res.send(x[0]) /*sendProf()*/ : console.log('no profile')/* no profile */ ;
  });
}));

router.post('/profile_edit', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var Profile = require('/etc/whidbey.io/server/models/profile_model.js');
  var userProfile = Profile.find({uname: req.session.uname}).limit(1);

  userProfile.then((x, err) => { x.length > 0 ? editProf(x[0]) : editProf(new Profile({}))})

  function editProf(y) {
    y.uname = req.session.uname ? req.session.uname : y.uname;
    y.name = req.body.name ? req.body.name : y.name;
    y.city = req.body.city;
    y.street = req.body.street;
    y.zip = req.body.zip;
    y.save();
    res.send({success: true});
  }
}));

// load shops
router.get('/load_shops', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var Shop = require('/etc/whidbey.io/server/models/shop_model.js');

  var shops = Profile.find({});
  shops.then((x, err) => res.send(x));
}));

// load self profile
router.post('/user_profile', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var Profile = require('/etc/whidbey.io/server/models/profile_model.js');
  var user_profile = Profile.find({_id: req.body.user_id}).limit(1);
  user_profile.then((x, err) => res.send(x[0]));
}));

router.post('/send_notification', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js'); 
  var Notification = require('/etc/whidbey.io/server/models/notification_model.js');

  var not_obj = new Notification({});
  not_obj.not_title = req.body.title;
  not_obj.not_message = req.body.message;
  not_obj.not_read = false,
  not_obj.not_owner = req.body.sendTo;
  not_obj.not_from = req.body.from_name;
  not_obj.not_from_id = req.body.from_id;
  not_obj.save();
  res.send({success:true});

}));

// takes user ID to retrieve their notifications, send array of notifications back to user
router.post('/notifications', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var User = require('/etc/whidbey.io/server/models/profile_model.js');
  var myUser = User.find({uname: req.session.uname}).limit(1);
  var Notification = require('/etc/whidbey.io/server/models/notification_model.js');

  myUser.then((x, err) => {
    var userNotifications = Notification.find({not_owner: x[0]._id});
    userNotifications.then((y, err) => {
      res.send(success: true, notifications: y);
    });
  });
}));

// saves a message in the db. messages are ordered into a 'message chain' by their timestamps, which are automatically created when inputted in the db.
router.post('/send_message', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var Message = require('/etc/whidbey.io/server/models/message_model.js');
  var msg_chain = Message({sender_id: req.body.sender_id, receiver_id: req.body.receiver_id, msg_content: req.body.msg_content});
  msg_chain.save();
  res.send({success:true});
}));

// get all messages
router.post('/get_messages', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js'); 
  var User = require('/etc/whidbey.io/server/models/profile_model.js');

  // get my user id
  var myUser = User.find({uname: req.session.uname}).limit(1);
  var Message = require('/etc/whidbey.io/server/models/message_model.js');

  // once my id is fetched
  myUser.then((x, err) => {
    // get all my associated friends
    var myMessageObj = Message.find({$or:[{sender_id: x[0]._id}, {receiver_id: x[0]._id}]});
    // once associated messages are fetched, send them back to user
    myMessageObj.then((y, err) => {
      res.send(success: true, messages: y);
    })
  });
}));

module.exports = router;
