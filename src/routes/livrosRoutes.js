import express from "express";
import LivroController from "../controllers/livroController.js";

const router = express.Router();

router
.get('/livros', LivroController.getAllBooks)
.get('/livros/:id', LivroController.getBookById)
.post('/livros', LivroController.newBook)
.put('/livros/:id', LivroController.updateBook)
.delete('/livros/:id', LivroController.deleteBook);

export default router;