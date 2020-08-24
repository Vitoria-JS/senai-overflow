import React from 'react';

import './styles.css';
import fotoPerfil from "../../assets/foto_perfil.png";
import imgPost from "../../assets/post-exemplo.jpg";
import {FiGithub, FiLogOut } from "react-icons/fi";
import {signOut} from "../../services/security";
import {useHistory} from "react-router-dom";

function Home(){
    const history = useHistory();
    return <div className="container">
        <div className="header">
            <div>
                <p>
                    SENAI OVERFLOW
                </p>
            </div>
            <div><input type="search" placeholder="pesquisar uma dúvida"/></div>
            <div>
                <button className="btnSair" onClick={() => {
                    signOut();
                    history.replace("/");
                }}>
                    Sair <FiLogOut size={20}/>
                </button>
            </div>
        </div>
        <div className="content">
            <section className="profile">
                <img src={fotoPerfil} alt="Foto de Perfil"/>
                <a href="#">
                    Editar Foto
                </a>
                <strong>Nome:</strong>
                <p>Fulano de tal</p>
                <strong>E-mail:</strong>
                <p>fulanodetal@gmail.com</p>
                <strong>Ra:</strong>
                <p>45673212</p>
            </section>
            <section className="feed">
                <div className="card-post">
                    <header>
                        <img src={fotoPerfil} alt="Foto de perfil"/>
                        <strong>Fulano</strong>
                        <p>em 12/12/2012 às 12:00</p>
                        <span><FiGithub className="icon" size={25}/></span>
                    </header>
                    <body>
                        <strong>
                            Aqui é a minha pergunta
                        </strong>
                        <p>
                            Aqui é a minha descrição da pergunta
                        </p>
                        <img src={imgPost}/>
                    </body>
                    <footer>
                        <h1>
                            Comentários
                        </h1>
                        <section>
                            <header>
                                <img src={fotoPerfil} alt="Imagem do Post"/>
                                <strong>Fulano</strong>
                                <p>em 12/12/2012 às 13:00</p>
                            </header>
                            <p>
                                Aqui é o texto do comentário.
                            </p>
                        </section>
                        <section>
                            <header>
                                <img src={fotoPerfil} alt="Imagem do Post"/>
                                <strong>Fulano</strong>
                                <p>em 12/12/2012 às 13:00</p>
                            </header>
                            <p>
                                Aqui é o texto do comentário.
                            </p>
                        </section>
                    </footer>
                </div>
            </section>
        </div>
    </div>;
}
export default Home;