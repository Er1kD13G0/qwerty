const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Dados em memória (exemplo)
let users = [];
let products = [];

// Rotas de Usuários
app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const user = { id: Date.now(), name: req.body.name };
    users.push(user);
    res.status(201).json(user);
});

app.delete('/users/:id', (req, res) => {
    users = users.filter(user => user.id !== parseInt(req.params.id));
    res.status(204).send();
});

// Rotas de Produtos
app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const product = { id: Date.now(), name: req.body.name };
    products.push(product);
    res.status(201).json(product);
});

app.delete('/products/:id', (req, res) => {
    products = products.filter(product => product.id !== parseInt(req.params.id));
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});
