// the /api router
var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');

module.exports = router;
