const mysql = require('mysql2');

// Criar a conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cadastro'
});

// Conectar ao banco de dados
connection.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados!');
});

module.exports = connection;
