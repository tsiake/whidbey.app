 // the /api router - contains all /api routes.
var express = require('express');
var router = express.Router();

// other required pkgs
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');
const fetch = require('isomorphic-fetch');
//const rp = require('request-promise');

// registerShop API
router.post('/register-shop', ((req, res) => {
  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var Shop = require('/etc/whidbey.io/server/models/shop_model.js');
  var Profile = require('/etc/whidbey.io/server/models/profile_model.js');

  var shop = new Shop({ });
  var shopProfile = Profile.find({uname: req.body.owner});
  var existingShop = Shop.find({name: req.body.shop_name, shop_link: req.body.shop_link, owner: req.body.username}).limit(1);

  existingShop.then((x, err) => {
    x.length > 0 ? (res.send({ success: false})) : registerShop();
  });

  var registerShop = _ => {
    shopProfile.then((y, err) => {
      if(y.length > 0) {
        y[0].own_shop = true;
        y[0].save();
      }
    });
    shop.name = req.body.shop_name;
    shop.shop_link = req.body.shop_link;
    shop.city = req.body.city;
    shop.street = req.body.street;
    shop.zip = req.body.zip;
    shop.owner = req.body.owner;
    shop.save();
    user.sendShopRegistrationEmail(req.body.owner, shop_link);
    res.send({success:true});
  }
}));


// captcha verify api
router.post('/captcha', ((req, res) => {
  var url = 'https://www.google.com/recaptcha/api/siteverify?secret='+process.env.REACT_APP_CAPTCHA_SECRET+'&response='+req.body.response;
  fetch(url, {
    method: 'post'
  })
    .then(response => res.send({success: response.ok}))
    .then(google_response => console.log(google_response))
    .then(error => console.log(error));
}));

// login API
router.post('/login', ((req, res) => {

  var db = require('/etc/whidbey.io/server/db/whidbey_db_connec.js');
  var User = require('/etc/whidbey.io/server/models/user_model.js');
  var Profile = require('/etc/whidbey.io/server/models/profile_model.js');
  var Shop = require('/etc/whidbey.io/server/models/shop_model.js');


  var loginUser = new User({});

  loginUser.uname = req.body.email;

  var hashpass = loginUser.encryptPass(req.body.pass);
  var thisUser = User.find({uname: loginUser.uname}).limit(1);

  thisUser.then((x, err) => {
    x.length > 0 ? bcompare() /* compare */ : res.send({success: false, username: ''});
  });

  var bcompare = thisUser.then((x, err) => {
    bcrypt.compare(req.body.pass, x[0].upass, function(err, result) {
      console.log('logging in');
      // save the session, pass the username to client
      let sessionProfile = Profile.find({uname:req.session.uname})
      let sessionShop = Shop.find({owner:req.session.uname});

      sessionProfile.then((y, err) => {
        if(y.length > 0) {
          req.session.name = y[0].name;
          req.session.city = y[0].city;
          req.session.street = y[0].street;
          req.session.zip = y[0].zip;
          req.session.user_since = y[0].user_since;
          req.session.save();
        }
      });

      sessionShop.then((z, err) => {
        if(z.length > 0) {
          req.session.shop_name = z[0].name;
          req.session.shop_zip = z[0].zip;
          req.session.shop_city = z[0].city;
          req.session.shop_street = z[0].street;
          req.session.shop_link = y[0].shop_link;
          req.session.save();
        }
      });

      console.log('email: '+ req.body.email);
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
  var User = require('/etc/whidbey.io/server/models/user_model.js');

  var user = new User({ /*uname: req.body.email, upass: user.encryptPass(req.body.pass)*/ });
  var regUser = User.find({uname: req.body.email}).limit(1);

  regUser.then((x, err) => {
    x.length > 0 ? (res.send({ success: false})) : hashThis();
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
  res.send({user: req.session.uname, user_since: req.session.user_since, city: req.session.city, street: req.session.street, zip: req.session.zip, shop_link: req.session.shop_link, shop_name: req.session.shop_name, shop_city: req.session.shop_city, shop_street: req.session.shop_street, shop_zip: req.session.shop_zip});
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

router.post('/create_notification', ((req, res) => {
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
      res.send({success: true, notifications: y});
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
      res.send({success: true, messages: y});
    })
  });
}));

module.exports = router;
