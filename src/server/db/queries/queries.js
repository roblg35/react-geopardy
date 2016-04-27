var knex = require('../knex');

module.exports = {

  /**** READ ****/

  //Returns all games
  Games: function () {
    return knex('games');
  },

  //Returns all categories for a given game
  Categories: function (gameID) {
    return knex
    .select('*')
    .from('categories')
    .where({
        game_id: gameID
    });
  },

  //Returns all questions in a given game,
  //joined with category names
  Questions: function (gameID) {
    return knex
    .select('name as category_name', 'questions.id as question_id', '*')
    .from('categories')
    .join('questions', 'questions.category_id', 'categories.id')
    .where('questions.game_id', gameID);
  },

  //Returns an array of all users in a given game, excluding admins
  Users: function (gameID) {
    return knex
    .select('*')
    .from('users')
    .where({
        game_id: gameID,
        admin: false
    });
  },

  //Returns a single user in an array
  getUser: function (userID) {
    return knex
    .select('*')
    .from('users')
    .where({
        id: userID
    });
  },

  //Returns a single question contained in an array
  getQuestion: function (questionID) {
    return knex
    .select('*', 'name as category_name', 'questions.id as question_id')
    .from('questions')
    .where({
        'questions.id': questionID
    })
    .join('categories', 'questions.category_id', 'categories.id')
    ;
  },

  /**** CREATE ****/

  //Adds a new game
  addGame: function (game) {
    return knex('games')
    .insert(game, 'id');
  },

  //Adds a new user, returns an array containing the user's id
  addUser: function (user) {
    return knex('users')
    .insert(user, 'id');
  },

  //Takes an array of question(s) and inserts them into db, returns an array of question id's
  addQuestions: function (questions) {
    return knex('questions')
    .insert(questions, 'id');
  },
  //Takes an array of categories and inserts them into db, returns an array of category id's
  addCategories: function (categories) {

  },

  /**** UPDATE ****/

  //Updates a single questions, returns the id of the question in an array
  editQuestion: function (id, question) {
    return knex('questions')
    .where('id', id)
    .update(question, 'id');
  }
};



