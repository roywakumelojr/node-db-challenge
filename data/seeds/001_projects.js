
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {
          project_name: 'PROJECT ROSSETTO',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
          project_name: 'PROJECT UTOPIA',
          description: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim'
        },
        {
          project_name: 'PROJECT PRIMO',
          description: 'veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip'
        },
        {
          project_name: 'PROJECT SHAMROCK',
          description: 'ex ea commodo consequat. Duis aute irure dolor in reprehenderit'
        },
        {
          project_name: 'PROJECT BEVERLY',
          description: 'in voluptate velit esse cillum dolore eu fugiat nulla pariatur'
        },
        {
          project_name: 'PROJECT ALTUM',
          description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
      ]);
    });
};
