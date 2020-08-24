const Aluno = require("../models/Aluno");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
module.exports = {
    async store(req, res){
        const {email, senha} = req.body;

        //verificar se o aluno existe
        const aluno = await Aluno.findOne({
            where: {
                email: email,
            }
        });
        //se nao existir ou a senha estiver incorreta, retorno erro
        if(!aluno || !await bcrypt.compare(senha, aluno.senha)){
            return res.status(403).send({erro: "Usuário e/ou senha inválidos"});
        }

        const token = jwt.sign({alunoId: aluno.id}, authConfig.secret);

        //se existir e a senha estiver correta retorna ok com o token
        res.status(201).send({
            aluno:{
            alunoId: aluno.id,
            nome: aluno.nome,
            ra: aluno.ra,
        },
        token
    });
    },
}