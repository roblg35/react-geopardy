var knex = require('../knex');

module.exports = {
  // Returns all categories in a given game
  Categories: function (gameID) {
    return knex
    .select('*')
    .from('categories')
    .where('categories.game_id', gameID);
  }
}
