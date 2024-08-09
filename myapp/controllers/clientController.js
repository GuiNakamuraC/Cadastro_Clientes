const Client = require('../models/client');

// Mostrar todos os clientes
exports.getAllClients = (req, res) => {
    Client.getAllClients((clients) => {
        res.render('index', { clients });
    });
};

// Mostrar o formulário de cadastro
exports.showCreateForm = (req, res) => {
    res.render('create');
};

// Criar um novo cliente
exports.createClient = (req, res) => {
    const client = {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact
    };
    Client.addClient(client, () => {
        res.redirect('/');
    });
};

// Mostrar o formulário de edição
exports.showEditForm = (req, res) => {
    const id = req.params.id;
    Client.getClientById(id, (client) => {
        res.render('edit', { client });
    });
};

// Atualizar um cliente
exports.updateClient = (req, res) => {
    const id = req.params.id;
    const client = {
        name: req.body.name,
        dob: req.body.dob,
        gender: req.body.gender,
        email: req.body.email,
        contact: req.body.contact
    };
    Client.updateClient(id, client, () => {
        res.redirect('/');
    });
};

// Excluir um cliente
exports.deleteClient = (req, res) => {
    const id = req.params.id;
    Client.deleteClient(id, () => {
        res.redirect('/');
    });
};
