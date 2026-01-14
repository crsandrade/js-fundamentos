
// 1)
//const numeros = [1, 4, 7, 10, 13, 16, 20]

let contaPar = 0;

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] % 2 === 0) {
        console.log(numeros[i])
        contaPar++;
    }
}

 console.log(`Existem ${contaPar} números pares neste array.`)

 //2)

 // const numeros = [5, 87, 11, 14, 17, 20];

 let acumulador = 0;

 for(let i = 0; i < numeros.length; i++) {
    if(!(numeros[i] % 2 === 0)) {
        acumulador += numeros[i];
    }
 }

 console.log(`Total: ${acumulador}`)

 //3)

// const numeros = [2, 4, 6, 8];

 const newNumbers = [];


 for (let i = 0; i < numeros.length; i++) {
    newNumbers.push(numeros[i] * 2)
 }

 console.log(newNumbers)

//4)

 const numeros = [3, 9, 2, 15, 6, 1, 30];

 let maior = numeros[0];

 for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maior) {
        maior = numeros[i]
    }
 }


 console.log(maior)

// 5)

const letras = ["a", "b", "c", "d", "e", "f"];


for (let i = 0; i < letras.length; i++) {
    if(i % 2 === 0) {
        console.log(letras[i])
    }
}