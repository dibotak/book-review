'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [
      {
        title: 'The City We Became',
        writer: 'N. K. Jemisin',
        publisher: 'Orbit',
        price: 110000,
        released_year: 2020,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: '1984',
        writer: 'George Orwell',
        publisher: 'Houghton Mifflin Harcourt',
        price: 125000,
        released_year: 1949,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Harry Potter and the Chamber of Secrets',
        writer: 'J.K. Rowling',
        publisher: 'Arthur A. Levine Books',
        price: 200000,
        released_year: 1999,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Such a Fun Age',
        writer: 'Kiley Reid',
        publisher: 'G.P. Putnam\'s Sons',
        price: 150000,
        released_year: 2019,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Africaville',
        writer: 'Jeffrey Colvin',
        publisher: 'Amistad',
        price: 160000,
        released_year: 2019,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};
