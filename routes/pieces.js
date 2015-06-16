var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Piece = require('../models/Piece.js');

/* GET /pieces listing. */
router.get('/', function(req, res, next) {
  Piece.find(function (err, pieces) {
    if (err) return next(err);
    res.json(pieces);
  });
});

router.post('/', function(req, res, next) {
  Piece.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.get('/:id', function(req, res, next) {
  Piece.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.put('/:id', function(req, res, next) {
  Piece.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

router.delete('/:id', function(req, res, next) {
  Piece.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;