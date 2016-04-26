var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../db/queries/queries');

//Returns an array of all game objects
router.get('/games', function(req, res, next) {
  queries.Games()
  .then(function(games) {
    res.json(games);
  });
});

router.get('/questions', function(req, res, next) {
  queries.Questions()
  .then(function(questions) {
    res.json(questions);
  });
});

module.exports = router;
