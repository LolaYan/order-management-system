exports.up = function (knex, Promise) {

  return Promise.all([
    // add user table
    knex.schema.createTable('users', function (table) {
      table.increments('user_id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone');
      table.string('address');
      table.string('gender');
      table.string('wechat_id');
      table.string('role').notNullable();
      table.timestamps(true, true);
    }),
    knex.schema.createTable('admin_users', function (table) {
      table.increments('user_id').primary();
      table.string('username').notNullable();
      table.string('password').notNullable();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone');
      table.string('address');
      table.timestamps(true, true);
    }),

    // add order table
    knex.schema.createTable('orders', function (table) {
      table.increments('order_id').primary();
      table.string('order_number').notNullable();
      table.string('order_status').notNullable();
      table.string('total_amount').notNullable();
      table.integer('client_id')
        .references('user_id')
        .inTable('users');
      table.dateTime('order_date').notNullable();
      table.dateTime('due_date');
      table.string('order_comment');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('suppliers', function (table) {
      table.increments('supplier_id').primary();
      table.string('company_name').notNullable();
      table.string('owner_name');
      table.string('company_info');
      table.string('email');
      table.string('phone');
      table.string('address');
      table.string('wechat_id');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('raw_products', function (table) {
      table.increments('raw_product_id').primary();
      table.string('product_name');
      table.integer('supplier_id')
        .references('supplier_id')
        .inTable('suppliers');
      table.string('unit_price');
      table.integer('amount');
      table.string('image');
      table.string('product_info');
      table.string('color');
      table.string('notes');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('product_type', function (table) {
      table.increments('product_type_id').primary();
      table.string('product_type_name');
      table.string('unit_price');
      table.string('unit_size');
      table.string('notes');
      table.timestamps(true, true);
    }),

    knex.schema.createTable('products', function (table) {
      table.increments('product_id').primary();
      table.string('product_name');
      table.integer('raw_product_id')
        .references('raw_product_id')
        .inTable('raw_products');
      table.integer('product_type_id')
        .references('product_type_id')
        .inTable('product_type');
      table.string('unit_price');
      table.integer('amount');
      table.string('image');
      table.string('product_info');
      table.string('color');
      table.string('notes');
      table.timestamps(true, true);
    }),

    // add order_item table
    knex.schema.createTable('order_items', function (table) {
      table.increments('order_item_id').primary();
      table.integer('order_id')
        .references('order_id')
        .inTable('orders');
      table.integer('product_id')
        .references('product_id')
        .inTable('products');
      table.string('unit_price').notNullable();
      table.string('amount').notNullable();
      table.timestamps(true, true);
    })
  ]);

};

exports.down = function (knex, Promise) {

  return Promise.all([
    knex.schema.dropTable('users'),
    knex.schema.dropTable('orders'),
    knex.schema.dropTable('suppliers'),
    knex.schema.dropTable('raw_products'),
    knex.schema.dropTable('product_type'),
    knex.schema.dropTable('products'),
    knex.schema.dropTable('order_items')
  ])
};
