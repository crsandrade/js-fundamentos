
function numeroRepetido(nums) {
    
    // Este objeto vai guardar os números que já apareceram
    const numerosVistos = {};

    // Vamos percorrer o array número por número
    for (let indice = 0; indice < nums.length; indice++) {

        // Pega o número atual do array
        const numeroAtual = nums[indice];

        // Pergunta: esse número já apareceu antes?
        if (numerosVistos[numeroAtual]) {

            // Se já apareceu, ele é o número repetido
            return numeroAtual;
        }

        // Se ainda não apareceu, marcamos como visto
        numerosVistos[numeroAtual] = true;
    }

   return Error('Não há números repetidos')
}

const nums = [3, 5, 8, 10]


const resultado = numeroRepetido(nums)

console.log(resultado)