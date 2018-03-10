const usersData = [{
  username: 'lolayan',
  password: 'password1',
  name: 'Lola Yan',
  email: 'lolayan@outlook.com',
  phone: '0212964396',
  address: '5 saltmarsh road',
  gender: 'female',
  wechat_id: 'yhx766280647',
  role: 'admin'
}, {
  username: 'rexchen',
  password: 'password1',
  name: 'Rex Chen',
  email: 'rexchen.nz@outlook.com',
  phone: '0212964396',
  address: '5 saltmarsh road',
  gender: 'male',
  wechat_id: '',
  role: 'client'
}
];
const ordersData = [{
  order_number: '201803100000001',
  order_status: 'pending',
  total_amount: '8888',
  order_date: '2018-03-10 12:00:00',
  order_comment: 'first order',
  client_id: 2
}, {
  order_number: '201803100000002',
  order_status: 'complete',
  total_amount: '8888',
  order_date: '2018-03-10 12:00:00',
  order_comment: 'first order',
  client_id: 2
}
];
exports.seed = function (knex, Promise) {
  return knex('orders').del()
    .then(() => {
      return knex('users').del();
    })
    .then(() => {
      return knex('users').insert(usersData);
    })
    .then(() => {
      let orderPromises = [];
      ordersData.forEach((order) => {
        let client_id = order.client_id;
        orderPromises.push(createorder(knex, order, client_id));
      });
      return Promise.all(orderPromises);
    });
};
const createorder = (knex, order, user_id) => {
  return knex('users').where('user_id', user_id).first()
    .then((userRecord) => {
      return knex('orders').insert({
        order_number: order.order_number,
        order_status: order.order_status,
        total_amount: order.total_amount,
        order_date: order.order_date,
        order_comment: order.order_comment,
        client_id: userRecord.user_id
      });
    });
};