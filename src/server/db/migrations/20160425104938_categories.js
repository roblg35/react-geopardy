
exports.up = function(knex, Promise) {
  return knex.schema.createTable('categories', function(table){
    table.increments();
    table.string('name');
    table.integer('game_id').references('id').inTable('games').onDelete('CASCADE');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('categories');
};
