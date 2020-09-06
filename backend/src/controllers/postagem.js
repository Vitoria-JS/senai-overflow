const Postagem = require("../models/Postagem");
const Aluno = require("../models/Aluno");
module.exports = {

    async index(req, res) {
        const postagens = await Postagem.findAll(
            {order: [["created_at", "DESC"]],
            include: {
                association: "Aluno",
                attributes: ["id", "nome", "ra"]
            }});
        res.send(postagens);
    },

    async store(req, res){
        const created_aluno_id = req.alunoId;

        const {firebaseUrl}= req.file ? req.file : "";

        const{ titulo, descricao, gists} = req.body;
        try{
            const aluno = await Aluno.findByPk(created_aluno_id);
            if(!aluno){
                res.status(404).send({erro: "Aluno não encontrado"});
            }

            let post = await aluno.createPostagem({
                titulo,
                descricao,
                imagem: firebaseUrl,
                gists
            });
            res.status(201).send(post);
        }
        catch{
            return res.status(500).send({erro: "Não foi possivel adicionar a postagem, tente novamente mais tarde."})
        }        
    },
    async delete(req, res){
        //pegando o id do aluno que esta logado
        const created_aluno_id = req.alunoId;
        //pegando o id do post a apagar
        const {id} = req.params;

        //procura pelo id
        let postagem = await Postagem.findByPk(id);

        //se a postagem não existir retorna not found
        if(!postagem){
            return res.status(404).send({erro: "Postagem não encontrada"});
        }
        //se o id do aluno logado for diferente do aluno que criou a postagem retorna não autorizado
        if(postagem.created_aluno_id != created_aluno_id){
            return res.status(401).send({erro: "Você não tem permissão para excluir essa postagem!"});
        }
        //efetua a exclusão da postagem
        await postagem.destroy();

        res.status(204).send();
    }
}