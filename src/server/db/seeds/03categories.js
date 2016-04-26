
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('categories').del(),

    // Inserts seed entries
    knex('categories').insert(
      {
        id: 1,
        name: 'Workflow & Git',
        game_id: 1
      }),
    knex('categories').insert(
      {
        id: 2,
        name: 'Evaluating JavaScript',
        game_id: 1
      }),
    knex('categories').insert(
      {
        id: 3,
        name: 'CSS is Magic',
        game_id: 1
      }),
    knex('categories').insert(
      {
        id: 4,
        name: 'HTTP',
        game_id: 1
      }),
    knex('categories').insert(
      {
        id: 5,
        name: 'CRUD',
        game_id: 1
      }),
    knex('categories').insert(
      {
        id: 6,
        name: 'Technical Definitions',
        game_id: 1
      })
  );
};

