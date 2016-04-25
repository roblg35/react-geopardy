var express = require('express');
var router = express.Router();

router.get('/ping', function(req, res, next) {
  res.json({ questions: [{ a: 3 }] });
  // res.sendFile('./index.html');
});

module.exports = router;
