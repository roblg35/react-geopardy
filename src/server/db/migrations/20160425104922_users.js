
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.string('name');
    table.integer('game_id').references('id').inTable('games').onDelete('CASCADE');
    table.boolean('admin');
    table.integer('score');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
