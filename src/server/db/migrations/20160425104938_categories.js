
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
    //auto incrementing
    table.increments();
    //table.integer('id').index().primary();
    table.string('name');
    table.integer('game_id').references('id').inTable('games').onDelete('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
