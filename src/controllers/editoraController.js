import editoras from "../models/Editora.js";

class EditoraController {

    static getAllEditoras = (req, res) => {
        editoras.find((err, editoras) => {
            res.status(200).json(editoras);
        });
    }

    static getEditorasById = (req, res) => {
        const id = req.params.id;
        editoras.findById(id, (err, editoras) => {
            if (err) {
                res.status(400).send({ message: `${err.message} - editora não encontrada` })
            } else {
                res.status(200).send({ editoras })
            }
        });
    }

    static newEditora = (req, res) => {
        let editora = new editoras(req.body);
        editora.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Falha ao cadastrar editora.` });
            } else {
                res.status(201).send(editora.toJSON());
            }
        });
    }

    static updateEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'editora atualizada com sucesso' })
            } else {
                res.status(500).send({ message: `${err.message} - Falha ao atualizar a editora` })
            }
        });
    }

    static deleteEditora = (req, res) => {
        const id = req.params.id;
        editoras.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({ message: 'editora removida com sucesso!' })
            } else {
                res.status(500).send({ message: `${err.message}` })
            }
        });
    }
}

export default EditoraController;