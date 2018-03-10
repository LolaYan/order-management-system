var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET order page. */
router.get('/', function (req, res, next) {
  knex('orders')
    .select()
    .then(orders => {
      res.render('orders', { orders: orders });
    });
});

/* GET new order page. */
router.get('/new', function (req, res, next) {
  res.render('newOrder');
});

module.exports = router;
