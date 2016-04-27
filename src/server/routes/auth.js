const jwt = require('jwt-simple');
const config = { secret: 'asdfhlai73829052d' };
// encode user's id, will not change
// sub => convention. subject is this user
// iat is issued at time
module.exports = {
  tokenForUser: function (id) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: id, iat: timestamp }, config.secret);
  }
}
