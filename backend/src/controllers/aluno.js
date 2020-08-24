const { Op } = require("sequelize");
const Aluno = require("../models/Aluno");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json")
module.exports = {
    async listar(req, res) {
        const alunos = await Aluno.findAll();
        res.send(alunos);
    },
    //buscar um aluno pelo id
    async buscarPorId(req, res) {
        const id = req.params.id;
        //busca o aluno pela chave
        const aluno = await Aluno.findByPk(id, {raw:true});
        //verifica se o aluno não foi encontrado
        if(!aluno){
            res.status(404).send({erro: "Aluno não encontrado"});
        }
        delete aluno.senha;
        res.send(aluno);
    },
    //metodo responsável por inserções
    async store(req, res){
        //procurar aluno
        const {ra, nome, email, senha} = req.body;
        let aluno = await Aluno.findOne({
            where:{ 
                [Op.or]:[
                    {ra: ra},
                    {email: email}
                ]
            }
        });
        //se existe retorna cadastrado
        if(aluno){
           return res.status(400).send({erro: "Aluno já cadastrado"});
        }

        const senhaCripto = await bcrypt.hash(senha, 10);

        //se nao existir cadastrar no banco
        aluno = await Aluno.create({ra, nome, email, senha: senhaCripto});

        const token = jwt.sign({alunoId: aluno.id}, authConfig.secret);
        res.status(201).send({
            aluno:{
                alunoId: aluno.id,
                nome: aluno.nome,
                ra: aluno.ra,
            },
            token
        });
    },
    update(){

    },
    delete(){

    },

}