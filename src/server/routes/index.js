var express = require('express');
var router = express.Router();
var pg = require('pg');
var queries = require('../db/queries/queries');
var Authorization = require('./auth');

//**** Get Routes ****/

//Returns an array of all games in the db
router.get('/games', function(req, res, next) {
  queries.Games()
  .then(function(games) {
    res.json(games);
  });
});

//Returns an array of all questions for a given game
router.get('/:gameID/questions', function(req, res, next) {
  queries.Questions(req.params.gameID)
  .then(function(questions) {
    res.json(questions);
  });
});

//Returns an array of all categories for a given game
router.get('/:gameID/categories', function(req, res, next) {
  queries.Categories(req.params.gameID)
  .then(function(categories) {
    res.json(categories);
  });
});

//Returns an array of all questions for a given game
router.get('/:gameID/questions', function(req, res, next) {
  queries.Questions(req.params.gameID)
  .then(function(questions) {
    res.json(questions);
  });
});

//Returns an array of all users in a given game, excluding admin(s)
router.get('/:gameID/users/', function(req, res, next) {
  queries.Users(req.params.gameID)
  .then(function(users) {
    res.json(users);
  });
});

//Returns a single user that matches the given userID, obj contained in an array
router.get('/users/:userID', function(req, res, next) {
  queries.getUser(req.params.userID)
  .then(function(user) {
    res.json(user);
  });
});

//Returns a single question that matches the given questionID, obj contained in an array
router.get('/questions/:questionID', function(req, res, next) {
  queries.getQuestion(req.params.questionID)
  .then(function(question) {
    res.json(question);
  });
});

/**** Post Routes ****/

//Posts a new game, returns an array containing the id of the new game
router.post('/games', function(req, res, next) {

  var gameInfo = req.body.username;

  var userInfo = {
    name: gameInfo,
    admin: true
  }

  queries.addGame(gameInfo)
  .then(function(gameID) {
    userInfo.game_id = Number(gameID);
    queries.addUser(userInfo)
    .then(function(data) {
      res.json({ game_id: data[0].game_id, token: Authorization.tokenForUser(data[0].id), admin: data[0].admin });
    });
  });
});

//Adds a new user, returns an array containing the id of the new user
router.post('/users', function(req, res, next) {

  var userInfo = {
      name: req.body.username,
      game_id: req.body.gameID
  }

  queries.addUser(userInfo)
  .then(function(data) {
    console.log(data);
    res.json({ game_id: data[0].game_id, token: Authorization.tokenForUser(data[0].id) });
  });
});

//Takes an array of categories and inserts them into db, returns an array of the question id's
router.post('/categories', function(req, res, next) {
  queries.addCategories(req.body)
  .then(function(categories) {
    res.json(categories);
  });
});

//Takes an array of question(s) and inserts them into db, returns an array of the question id's
router.post('/questions', function(req, res, next) {
  queries.addQuestions(req.body)
  .then(function(questions) {
    res.json(questions);
  });
});

/**** Put Routes ****/

//Updates a single question and returns an array containing the question's id
router.post('/questions/:questionID', function(req, res, next) {
  queries.editQuestion(req.params.questionID, req.body)
  .then(function(question) {

    res.json(question);
  });
});


module.exports = router;
