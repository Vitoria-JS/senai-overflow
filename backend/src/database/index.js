const Sequelize = require("sequelize");
const dbConfig = require("../config/database");
const Aluno = require("../models/Aluno");
const Postagem = require("../models/Postagem");
const Comentario = require("../models/Comentario");

//nova instancia da classe sequelize passando as configurações do banco de dados
const connection = new Sequelize(dbConfig);
//inicializando as models
Aluno.init(connection);
Postagem.init(connection);
Comentario.init(connection);
//inicializando as associações
Aluno.associate(connection.models);
Postagem.associate(connection.models);
Comentario.associate(connection.models);

//exportamos a configuração
module.exports = connection;