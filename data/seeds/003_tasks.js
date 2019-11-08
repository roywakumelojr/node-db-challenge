
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {
          project_id: 1,
          description: 'Excepteur sint occaecat cupidatat', 
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          completed: false
        },
        {
          project_id: 2,
          description: 'Excepteur sint occaecat cupidatat', 
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          completed: false
        },
        {
          project_id: 3,
          description: 'Excepteur sint occaecat cupidatat', 
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          completed: false
        },
        {
          project_id: 4,
          description: 'Excepteur sint occaecat cupidatat', 
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          completed: false
        },
        {
          project_id: 5,
          description: 'Excepteur sint occaecat cupidatat', 
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          completed: false
        },
        {
          project_id: 6,
          description: 'Excepteur sint occaecat cupidatat', 
          notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          completed: false
        }
      ]);
    });
};
