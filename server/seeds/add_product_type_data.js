
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('product_type').del()
    .then(function () {
      // Inserts seed entries
      const productTypes = [{
        product_type_name: 'bed_linen_set',
        unit_price: '600',
        unit_size: '13',
        notes: 'bed size: 2x2.3'
      }, {
        product_type_name: 'bed_linen_set',
        unit_price: '800',
        unit_size: '14',
        notes: 'bed size: 2.3x2.3'
      }
      ];
      // Inserts seed entries
      return knex('product_type').insert(productTypes);
    });
};
