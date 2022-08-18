import livros from "../models/Livro.js";

class LivroController {

    static getAllBooks = (req, res) => {
        livros.find()
            .populate('autor')
            .populate('editora')
            .exec((err, livros) => {
                res.status(200).json(livros);
            });
    }

    static getBookById = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .populate('editora', 'nome')
        .exec((err, livros) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - Livro não encontrado` })
            } else {
                res.status(200).send({ livros })
            }
        });
    }

    static newBook = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar livro.` });
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }

    static updateBook = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro atualizado com sucesso' })
            } else {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar o livro` })
            }
        });
    }

    static deleteBook = (req, res) => {
        const id = req.params.id;
        livros.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Livro removido com sucesso!' })
            } else {
                res.status(500).send({ message: `${err.message}` })
            }
        });
    }
}

export default LivroController;