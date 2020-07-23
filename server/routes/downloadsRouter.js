var express = require('express');
var router = express.Router();

// this handles downloads for receipts - to be implemented
router.get('/receipt', ((req, res) => {
    const file = '/opt/downloads/receipt-file'
    res.download(file);
}));

module.exports = router;
