#O que é ORM?

ORM é o mapeamento objeto-relacional, consiste basicamente em mapear os dados e a estrutura do banco em objetos no nosso projeto

#Exemplo: 
Tabela pessoa
    nome idade sexo
---javascript
class pessoa{
    string nome;
    int idade;
    string sexo;

    public save(){
        //insert banco de dados
    }
}
---

#Exemplos de ORM's
- Python: FLEX
- Ruby: RAIL
- Java: Hibernate
- PHP: Eloquent
- Typescript: Typeorm
- Javascript: Sequelize