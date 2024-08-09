const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clientRoutes = require('./routes/clientRoutes');

const app = express();
const port = 3000;

// Configurar o EJS como engine de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Rotas
app.use('/', clientRoutes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

