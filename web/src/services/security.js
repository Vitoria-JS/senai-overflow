const CHAVE_ALUNO = "@aluno";
export const signIn= (aluno) =>{
    localStorage.setItem(CHAVE_ALUNO, JSON.stringify(aluno));
}
export const signOut = () => {
    localStorage.clear();
}
export const isSignedIn = () =>{
    const aluno = JSON.parse(localStorage.getItem(CHAVE_ALUNO));

    //aqui futuramente vamos implementar a verificação de token
    return aluno ? true: false;
}