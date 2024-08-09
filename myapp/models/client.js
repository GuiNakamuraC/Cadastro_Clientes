const db = require('../config/db');

// Obter todos os clientes
exports.getAllClients = (callback) => {
    db.query('SELECT * FROM clients', (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Obter cliente por ID
exports.getClientById = (id, callback) => {
    db.query('SELECT * FROM clients WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        callback(result[0]);
    });
};

// Adicionar um novo cliente
exports.addClient = (client, callback) => {
    db.query('INSERT INTO clients SET ?', client, (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

// Atualizar um cliente
exports.updateClient = (id, client, callback) => {
    db.query('UPDATE clients SET ? WHERE id = ?', [client, id], (err, result) => {
        if (err) throw err;
        callback(result);
    });
};

// Excluir um cliente
exports.deleteClient = (id, callback) => {
    db.query('DELETE FROM clients WHERE id = ?', [id], (err, result) => {
        if (err) throw err;
        callback(result);
    });
};
