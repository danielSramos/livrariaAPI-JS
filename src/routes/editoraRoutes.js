import express from 'express';
import EditoraController from "../controllers/editoraController.js"

const router = express.Router();

router
.get('/editora', EditoraController.getAllEditoras)
.get('/editora/:id', EditoraController.getEditorasById)
.post('/editora', EditoraController.newEditora)
.put('/editora/:id', EditoraController.updateEditora)
.delete('/editora/:id', EditoraController.deleteEditora);

export default router;