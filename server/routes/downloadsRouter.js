// the /downloads router
var express = require('express');
var router = express.Router();

router.get('/manifest', ((req, res) => {
    const file = '/opt/downloads/manifest.json';
    res.download(file);
}));

router.get('/launcher', ((req, res) => {
    const file = '/opt/downloads/intrepid.zip'
    res.download(file);
}));

router.get('/skills', ((req, res) => {
    const file = '/opt/downloads/skills.tre'
    res.download(file);
}));

router.get('/swgemu_live', ((req, res) => {
    const file = '/opt/downloads/swgemu_live.cfg'
    res.download(file);
}));

module.exports = router;
