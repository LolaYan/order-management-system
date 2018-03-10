
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('suppliers').del()
    .then(function () {
      // Inserts seed entries
      const suppliers = [{
        company_name: 'HuaFu',
        owner_name: 'HF',
        company_info: 'fabric company',
        email: 'lolayan.nz@gmail.com',
        phone: '0212964396',
        address: '5 saltmarsh road',
        wechat_id: 'yhx766280647'
      }, {
        company_name: 'LiBaiJia',
        owner_name: 'Zhouli',
        company_info: 'fabric company',
        email: 'test@test.com',
        phone: '0212964396',
        address: '5 saltmarsh road',
        wechat_id: 'yhx766280647'
      }
      ];
      // Inserts seed entries
      return knex('suppliers').insert(suppliers);
    });
};
