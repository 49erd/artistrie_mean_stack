var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Piece = require('../models/Piece.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Piece.find(function (err, pieces) {
    if (err) return next(err);
    res.json(pieces);
  });
});

module.exports = router;