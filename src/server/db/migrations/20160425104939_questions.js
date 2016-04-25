
exports.up = function(knex, Promise) {
  return knex.schema.createTable('questions', function(table){
    table.increments();
    table.text('question');
    table.text('answer');
    table.integer('points');
    table.boolean('daily_double');
    table.integer('game_id').references('id').inTable('games').onDelete('CASCADE');
    table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('questions');
};
