const numeros = [1, 2, 3, 4, 5, 6];

const newNumbers = numeros.filter((number) => number % 2 === 0)

const numbersAoQuad = newNumbers.map((newNumber) => newNumber **2 )

console.log(numbersAoQuad)