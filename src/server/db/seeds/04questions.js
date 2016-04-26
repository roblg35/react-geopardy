var seeder = require('knex-csv-seeder').seeder.seed;

exports.seed = seeder({
      table: 'questions',
      file: './src/server/db/data/questions.csv'
});


