import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --primary: #111;
        --secondary: rgb(25,25,25);
        --white: #D9D9D9;
        --gray: #7A7A7A;
        --red: #AA0000;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
    }
    body{
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        background-color: var(--primary);
        overflow-x: none;
    }
    input{
        color: var(--white);
        background-color: var(--secondary);
        font-size: 16px;
        border: 1px solid var(--white);
        padding: 10px;
        font-weight: bold;
        height: 30px;
        transition: background-color 0.2s;
    }

    textarea{
        color: var(--white);
        background-color: var(--secondary);
        font-size: 16px;
        border: 1px solid var(--white);
        padding: 10px;
        font-weight: bold;
        height: 30px;
        transition: background-color 0.2s;
        resize: none;
    }

    label{
        color: var(--white);
        letter-spacing: 2px;
        font-size:20px;
    }
    input, button, textarea{
        :hover{
            background-color: var(--red);
            transition: background-color 0.2s;
        }
    }
    button{
        padding: 10px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 18px;
        letter-spacing: 1px;
        color: var(--white);
        background-color: var(--primary);
        cursor: pointer;
        border: 1px solid var(--white);
        :active{
            color: var(--gray);
            border: 1px solid (--gray);
        }
    }`;