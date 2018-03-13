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

/* POST new order page. */

function validOrder(order) {
  return true;
  // return order.order_item.product_id.trim() != '' && typeof order.total_amount == 'number';
}
router.post('/', function (req, res, next) {
  if (validOrder(req.body)) {
    // insert into the database
    const order {
      order_number: req.body.order_number,
      order_status: req.body.order_status,
      total_amount: req.body.total_amount,
      client_id: req.body.client_id,
      order_date: req.body.order_date,
      due_date: req.body.due_date,
      order_comment: req.body.order_comment,
      order_items: req.body.order_items
    }
  } else {
    // respond with an error
  }
});

module.exports = router;
