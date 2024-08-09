const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Rota para listar todos os clientes
router.get('/', clientController.getAllClients);

// Rota para exibir o formulário de cadastro
router.get('/create', clientController.showCreateForm);

// Rota para criar um novo cliente
router.post('/create', clientController.createClient);

// Rota para exibir o formulário de edição
router.get('/edit/:id', clientController.showEditForm);

// Rota para atualizar um cliente
router.post('/edit/:id', clientController.updateClient);

// Rota para excluir um cliente
router.get('/delete/:id', clientController.deleteClient);

module.exports = router;
