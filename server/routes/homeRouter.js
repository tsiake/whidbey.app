var express = require('express');
var router = express.Router();

// the / router - client application attaches to root id
router.get('/', ((req, res) => {
  res.sendFile('/etc/whidbey.app/server/views/hp.html');
}));

module.exports = router;
