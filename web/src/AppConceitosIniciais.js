import React, { useState } from 'react';

const HelloWorld = () => {
  return (
    <div>Hello world; React JS</div>
  );
}
//props recebe todos os parametros de argumento
const BemVindo = (props) => {
  return (
    <div>Bem-Vindo, {props.usuario}</div>
  );
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const handlerEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlerSenha = (e) => {
    setSenha(e.target.value);
  };
  const entrar = async() => {
    const retorno = await fetch("http://localhost:3001/sessao", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        senha
      }
    )});
    console.log(await retorno.json());
  };
  return(
    <>
    <input type="text"
    value={email}
    onChange={handlerEmail}
    placeholder="Insira seu e-mail"/>

    <input type="password"
    placeholder="Insira sua senha"
    value={senha}
    onChange={handlerSenha}/>
    <button onClick={entrar}>Entrar</button>
    </>
  );
};

function App() {
  return (
    <div>
      <HelloWorld/>
      <BemVindo usuario="Vitória"/>
      <Login></Login>
    </div>
  );
}

export default App;
