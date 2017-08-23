var express = require('express');
var router = express.Router();

router.get('/', function(rec, res, next) {
    res.render('error');
});