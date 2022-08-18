import express from "express";
import AutorController from "../controllers/autorController.js";

const router = express.Router();

router
.get('/autores', AutorController.getAllAuthors)
.get('/autores/:id', AutorController.getAuthorById)
.post('/autores', AutorController.newAuthor)
.put('/autores/:id', AutorController.updateAuthor)
.delete('/autores/:id', AutorController.deleteAuthor);

export default router;