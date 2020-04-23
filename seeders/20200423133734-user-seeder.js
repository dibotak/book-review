'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkCreate('Users', [
      {
        name: 'Alix',
        username: 'alix',
        password: 'alix',
        email: 'alix@mail.co',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chakra',
        username: 'chakra',
        password: 'chakra',
        email: 'chakra@mail.id',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Rebero',
        username: 'rebero',
        password: 'rebero',
        email: 'rebero@mail.my',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Harrow',
        username: 'harrow',
        password: 'harrow',
        email: 'harrow@inmail.io',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bradley',
        username: 'bradley',
        password: 'bradley',
        email: 'bradley@email.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
