module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Books',
      'filename',
      Sequelize.STRING
    );

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Books',
      'filename'
    );
  }
}

  