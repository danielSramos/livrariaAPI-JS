import mongoose from 'mongoose';

const editoraSchema = new mongoose.Schema (
    {
        id: {type: String},
        nome: {type: String, required: true},
        nicho: {type: String}
    },
    {
        versionKey: false
    }
);

const editora = mongoose.model('editoras', editoraSchema);

export default editora;