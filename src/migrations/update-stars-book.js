
module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'Books',
        'stars',
        Sequelize.FLOAT
      );
  
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'Books',
        'stars'
      );
    }
  }