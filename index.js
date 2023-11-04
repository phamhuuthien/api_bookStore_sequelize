const express = require('express');
const app = express();
require('dotenv').config();
const initRoutes = require('./src/routes');
require('./connection_database')

app.use(express.json());
app.use(express.urlencoded({ extended:true}));

initRoutes(app)




app.listen(process.env.PORT, function(){
    console.log('listening on port ' + process.env.PORT);
})