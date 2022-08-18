import express from 'express';
import db from './config/db.connetc.js'
import livros from './models/Livro.js'

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
    console.log('Conexão com o banco efetuada com sucesso!')
})

const app = express();

app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: 'O senhor dos anéis'
    },
    {
        id: 2,
        titulo: 'O Hobbit'
    }
]   

app.get('/', (req, res) => {
    res.status(200).send('Curso de NodeJS');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
})

app.get('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);
    res.json(livros[index]);
})

app.post('/livros', (req, res) => {
    livros.push(req.body);
    res.status(201).send('Livro cadastrado com sucesso!');
})

app.put('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params;
    let index = searchBook(id);
    livros.splice(index, 1)
    res.send(`Livro deletado com sucesso!`)
})

function searchBook(id) {
    return livros.findIndex(livro => livro.id == id)
}

export default app;