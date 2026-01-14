const senha = '123'
const senha2 = '18721872Nn'

function validarSenha(senha) {
    try {
        
        const tamanhoMinimo = senha.length >= 8;
        const letraMm = /[a-zA-Z]/.test(senha);
        const temNumero = /\d/.test(senha);

        return tamanhoMinimo && letraMm && temNumero;

        } catch (e) {
            console.error(e.message)
    }
}


    console.log(validarSenha(senha))
    console.log(validarSenha(senha2))

    