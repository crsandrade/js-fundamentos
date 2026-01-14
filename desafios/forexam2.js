//1)
//const numeros = [5, 12, 3, 20, 8, 15]

let acumulaMaiores = 0;

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > 10) {
        acumulaMaiores += numeros[i];
    }
}

console.log(acumulaMaiores)


//2) 

//const numeros = [2, 4, 10, 12, 15, 18, 21, 30]

let contaParMaior = 0;


for(let i = 0; i < numeros.length; i++) {

    if (numeros[i] % 2 === 0 && numeros[i] > 10) { 
         contaParMaior++;
    }
}

console.log(`${contaParMaior} números pares`)


//3)

//const numeros = [3, 15, 7, 20, 1, 9, 30]

const numerosMenores = [];

for(let i = 0; i < numeros.length; i++) {

    if(numeros[i] < 10) {
        numerosMenores.push(numeros[i])
    }
}

console.log(numerosMenores)


//4)

const pessoas = [
    {nome: "Ana", idade: 17},
    {nome: "Carlos", idade: 22},
    {nome: "Beatriz", idade: 15},
    {nome: "Rafael", idade: 28},
]

for(let i = 0; i < pessoas.length; i++) {
    if(pessoas[i].idade >= 18) {
        console.log(pessoas[i].nome)
    }
}

//5)

const valores = [10, 20, 30, 40, 50, 60];

let acumulaIndImpar = 0;

for(let i = 0; i < valores.length; i++) {
    if(i % 2 !== 0) {
       acumulaIndImpar += valores[i]
    }
}

console.log(acumulaIndImpar)