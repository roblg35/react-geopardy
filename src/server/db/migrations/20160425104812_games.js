
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(table){
    //not auto incrementing
    table.integer('id').index().primary();
    table.string('url');
  });

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games');
};
