// the / router
var express = require('express');
var router = express.Router();

router.get('/', ((req, res) => {
	//res.sendFile(('/etc/whidbey.io/views/hp.pug'));
	
	res.sendFile('/etc/whidbey.io/server/views/hp.html');
//	if(sdet) { res.sendFile('/etc/whidbey.io/server/views/hp.html', { uname: sdet.email });}
//	else { res.redirect('/login'); }
	
}));

module.exports = router;
