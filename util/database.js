const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root', // Substitua pela senha correta
    database: 'node-complete',
});



module.exports = connection.promise();