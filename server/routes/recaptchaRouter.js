var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var Promise = require('promise');
var randstr = require('randomstring');

// recaptcha router sends POST request to https://www.google.com/recaptcha/api/siteverify
// details here: https://developers.google.com/recaptcha/docs/verify

module.exports = router;
