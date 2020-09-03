import React, { useRef, useEffect } from "react";
import {Alert} from "./styles";
function Alerts(props){
    const alertEl = useRef();
    useEffect(() => {
        if(mensagem){
            alertEl.current.style.width = "300px";
        }else{
            alertEl.current.style.width = "0px";
        }
    });
    const {mensagem, tipo, setMensagem} = props;
    return (
        <Alert ref={alertEl} tipo={tipo}>
            <h1>{mensagem}</h1>
            {mensagem && (
            <span onClick={() => {
                setMensagem(undefined);
            }}>
                &times;
            </span>)}
        </Alert>
    );
}

export default Alerts;