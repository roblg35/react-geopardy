
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('games').del(),

    // Inserts seed entries
    knex('games').insert(
      {
        url: 'http://localhost:5000/'
      })
    );
};


