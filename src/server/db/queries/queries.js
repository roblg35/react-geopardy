var knex = require('../knex');

module.exports = {
  Games: function () {
    return knex('games');
  },
  Questions: function () {
    return knex('questions')
    .join('categories', 'questions.category_id', '=', 'categories.id')
    .select('*', 'category.name as category.category_name');
  }
};