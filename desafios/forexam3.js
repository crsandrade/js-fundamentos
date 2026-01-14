/*
1)


const texto = "javascript"

let contaVogal = 0;

for (let i = 0; i < texto.length; i++) {
    const letra = texto[i]

    if( letra == "a" ||
        letra == "e" ||
        letra == "i" ||
        letra == "o" ||
        letra == "u"  ) {
            contaVogal++;

    }
}

console.log(`Essa palavra possui ${contaVogal} vogais`)

2)


const texto = "frontend";

const inverteTexto = [];

for(let i = texto.length - 1; i >= 0; i--){
    inverteTexto.push(texto[i])
}

console.log(inverteTexto.join(""))

3)


const usuarios = [
    { nome: "Ana", idade: 17, ativo: true},
    { nome: "Carlos", idade: 22, ativo: false},
    { nome: "Beatriz", idade: 19, ativo: true},
    { nome: "João", idade: 30, ativo: true}
]

for(let i = 0; i < usuarios.length; i++) {
    if(usuarios[i].idade >= 18 && usuarios[i].ativo) {
        console.log(usuarios[i].nome)
    }
}

4)


const users = [
    { nome: "Ana", ativo: false },
    { nome: "Carlos", ativo: true },
    { nome: "Beatriz", ativo: false },
    { nome: "João", ativo: false },
];


let inactiveUsers = 0;

for( let i = 0; i < users.length; i++) {
    if(!users[i].ativo) {
        inactiveUsers++;
    }
}

console.log(`Temos ${inactiveUsers} usuário(s) ativos no momento.`)

5)


const palavra = "programacao";

for(let i = 0; i < palavra.length; i++) {
    if(i % 2 !== 0) {
        console.log(palavra[i])
    }
}

*/