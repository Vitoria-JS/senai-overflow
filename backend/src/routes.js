//esse arquivo tem como responsábilidade cadastrar as rotas da aplicação

const express = require("express");
const multer = require("multer");

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024,
});

//criando o routerizador
const routes = express.Router();

const alunoController = require("./controllers/aluno");
const postagemController = require("./controllers/postagem");
const comentarioController = require("./controllers/comentarios");
const sessaoController = require("./controllers/sessao");
const autorizacaomiddleware = require("./middlewares/autorizacao");
const uploadImage = require("./services/firebase")

//rotas publicas
routes.post("/sessao", sessaoController.store);
routes.post("/alunos", alunoController.store);

//middleware de proteção das rotas
routes.use(autorizacaomiddleware);

//routes usuarios
routes.get("/alunos", alunoController.listar);
routes.get("/alunos/:id", alunoController.buscarPorId);
//routes postagem
routes.post("/postagens", Multer.single("imagem"), uploadImage, postagemController.store);
routes.delete("/postagens/:id", postagemController.delete);
routes.get("/postagens", postagemController.index);

//routes comentarios
routes.post("/postagens/:postId/comentarios", comentarioController.store);
routes.get("/postagens/:postId/comentarios", comentarioController.index);
module.exports = routes;