
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert(
      {
        name: 'Workflow & Git',
        game_id: 1
      }),
    knex('categories').insert(
      {
        name: 'Evaluating JavaScript',
        game_id: 1
      }),
    knex('categories').insert(
      {
        name: 'CSS is Magic',
        game_id: 1
      }),
    knex('categories').insert(
      {
        name: 'HTTP',
        game_id: 1
      }),
    knex('categories').insert(
      {
        name: 'CRUD',
        game_id: 1
      }),
    knex('categories').insert(
      {
        name: 'Technical Definitions',
        game_id: 1
      })
  );
};

