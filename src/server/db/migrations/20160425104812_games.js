
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
    //table.integer('id').index().primary();
    table.increments();
    table.string('url');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
