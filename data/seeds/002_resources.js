
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {
          resource_name: 1, 
          description: 'Resource Name 1'
        },
        {
          resource_name: 2, 
          description: 'Resource Name 2'
        },
        {
          resource_name: 3, 
          description: 'Resource Name 3'
        },
        {
          resource_name: 4, 
          description: 'Resource Name 4'
        },
        {
          resource_name: 5, 
          description: 'Resource Name 5'
        },
        {
          resource_name: 6, 
          description: 'Resource Name 6'
        }
      ]);
    });
};
