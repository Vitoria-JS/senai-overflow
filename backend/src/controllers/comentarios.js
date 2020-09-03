const Comentario = require("../models/Comentario");
const Postagem = require("../models/Postagem");
module.exports = {
    //implementar a listagem de comentarios
    async index(req, res){
        const {postId} = req.params;
        const postagem = await Postagem.findByPk(postId);
        if(!postagem){
            return res.status(404).send({erro: "Postagem não encontrada"});
        }
        const comentarios = await postagem.getComentarios({
            include: {
                association: "Aluno",
                as: "aluno",
                attributes: ["id", "nome"],
            },
            attributes: ["id", "descricao", "created_at"],
            order: [["created_at", "ASC"]]
        });
        res.send(comentarios);
    },
    //implementar a inserção de comentários
    async store(req, res){
        const alunoId = req.alunoId;
        const postId = req.params.postId;
        const {descricao} = req.body;
        const postagem = await Postagem.findByPk(postId);
        if(!postagem){
            res.status(404).send({erro: "Aluno não encontrado"});
        }
        let comentario = await postagem.createComentario({
            descricao,
            aluno_id: alunoId
        });

        comentario = comentario.dataValues;
        comentario.postagem_id = comentario.PostagemId;
        delete comentario.PostagemId;
        delete comentario.AlunoId;
        res.status(201).send(comentario);
    }
};