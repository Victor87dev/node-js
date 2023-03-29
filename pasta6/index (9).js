/*
const express = require('express');
const app = express();
const port = 3000
const Modulo = require('./text')
const Desconto = Modulo.Desconto

Desconto(1200, 0.6);

app.get('/', (req, res) => {
    res.send('Olá mundo!');
});

app.listem(port, () => {
    console.log(`Roda na porta ${port}`);
});
*/

// atividade 1 

/*
const express = require('express');
const app = express();

app.get('/Santinha', (req, res) => {
    res.json({ message: 'Olá, mundo!'});
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
*/

// atividade 2

/*
const express = require('express');
const app = express();

const usuarios = [
  {id: 1, nome: 'João'},
  {id: 2, nome: 'Maria'},
  {id: 3, nome: 'José'}  
];

app.get('/usuarios', (req, res) => {
    res.json(usuarios);
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
*/

// atividade 3
/*
const express = require('express');
const app = express();

const produtos = [
    { id: 1, nome: 'Produto 1', preco: 10.00},
    { id: 2, nome: 'Produto 2', preco: 20.00},
    { id: 3, nome: 'Produto 3', preco: 30.00} 
];

app.get('/produto/:id', (req, res) => {
    const produto = produtos.find(p => p.id == req.params.id);
    if(produto) {
        res.json(produto);
    } else {
        res.status(404).send('Produto não encontrado');
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});
*/

// atividade 4 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem-vindo ao meu site!');
});

app.get('/sobre', (req, res) => {
    res.send('Este é um site informativo sobre assuntos diversos.');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});



