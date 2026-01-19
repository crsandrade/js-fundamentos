const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const newAlphabet = [];

const retornaLetra = (index) => {
  if (index > alphabet.length || index <= 0) {
    return "Índice inválido";
  }

  for (let i = 0; i < index; i++) {
    newAlphabet.push(alphabet[i]);
  }
  return newAlphabet;
};

console.log(retornaLetra(2));
