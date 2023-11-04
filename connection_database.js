const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('store', 'root', 'huuthien@26082003', {
  host: '127.0.0.1',
  port: '3306',
  dialect: 'mysql',
  logging: false
});
// const sequelize = new Sequelize('store', 'root', '', {
//     host: '127.0.0.1',
//     port: '3308',
//     dialect: 'mysql',
//     logging: false
//   });
  

const connectionDatabase = async ()=>{
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully.');
        })
        .catch((err) => {
            console.log('Unable to connect to the database:', err);
        });
}
connectionDatabase()