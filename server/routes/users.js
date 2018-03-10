var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET users listing. */
router.get('/', function (req, res, next) {
  knex('users')
    .select()
    .then(users => {
      res.render('users', { users: users });
    });
});
/* GET new order page. */
router.get('/new', function (req, res, next) {
  res.render('newUser');
});
module.exports = router;
