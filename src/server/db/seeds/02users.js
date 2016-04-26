
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert(
      {
        name: 'TurbulentTerminals',
        game_id: 1,
        admin: false,
        score: 0
      }),
    knex('users').insert(
      {
        name: 'Wilfred & Co',
        game_id: 1,
        admin: false,
        score: 0
      }),
    knex('users').insert(
      {
        name: 'i return null',
        game_id: 1,
        admin: false,
        score: 0
      }),
    knex('users').insert(
      {
        name: 'team tank',
        game_id: 1,
        admin: false,
        score: 0
      }),
    knex('users').insert(
      {
        name: 'wes',
        game_id: 1,
        admin: true,
        score: 0
      })
  );
};
