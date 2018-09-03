var express = require('express');
var router = express.Router();
var request = require('request');
var Player = require('../models/Player.js');


/* GET ALL Players */
router.get('/', function(req, res, next) {
    Player.find(function (err, products) {
      if (err) return next(err);
      res.json(products);
    });
  });

/* GET SINGLE Player BY ID */
router.get('/:id', function(req, res, next) {
    Player.findById(req.params.id, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });

/* SAVE Player */
router.post('/', function(req, res, next) {
    Player.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
    });


/* UPDATE Player */
router.put('/:id', function(req, res, next) {
  Player.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE Player */
router.delete('/:id', function(req, res, next) {
  Player.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;