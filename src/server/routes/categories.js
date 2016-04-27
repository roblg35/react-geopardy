var express = require('express');
var router = express.Router();
var queries = require('../db/queries/queries');

//Returns an array of all game objects
router.get('/games', function(req, res, next) {
  queries.Games()
  .then(function(games) {
    res.json(games);
  });
});

module.exports = router;
