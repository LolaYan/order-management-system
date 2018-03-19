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

function validUser(user) {
  return user.name.trim() != '';
}
router.post('/', function (req, res, next) {
  console.log(req.body);
  if (validUser(req.body)) {
    let user = {
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      role: 'client'
    };
    knex('users')
      .insert(user, 'user_id')
      .then(ids => {
        const id = ids[0];
        res.redirect('/users')
      });
  } else {
    res.status(500);
    res.render('internal server error', { Message: 'invalid user' });
  }
});

module.exports = router;
