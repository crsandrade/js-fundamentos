const numeros = [3, 9, 2, 15, 6, 1]

function revelaNumero(numeros) {

    let maior = numeros[0];
    let menor = numeros[0];

    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] > maior){
            maior = numeros[i];
        }

        if(numeros[i] < menor) {
            menor = numeros[i];
        }
    }


    const somaArray = numeros.reduce((total, numero) => total + numero, 0);

    const media = somaArray / numeros.length

    return {
        maior,
        menor,
        media
    }
}

console.log(revelaNumero(numeros));


/*
function analiseNumeros() {
    const maior = Math.max(...numeros);
    const menor = Math.min(...numeros);



    const soma = numeros.reduce((total, numero) => total + numero, 0)
    const media = soma / numeros.length;

    return {maior, menor, media}
}
*/