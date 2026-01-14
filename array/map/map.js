const number = [2, 5, 8, 10]

console.log(number.map((number)=> number * 2));

const users = [ 
    {id: 1, name: 'Rafael', age: 29 },
    {id: 2, name: 'Lavínia', age:28 },
    {id: 3, name: 'Luan', age: 29}
];

console.log(users.map((user) => user.name))



const transactions = [
    {id: 1, type: 'income', amount: 1000 },
    {id: 2, type: 'expense', amount: 500 },
    {id: 3, type: 'income', amount: 2000 }
]

console.log(transactions.map((transaction) => {
  return {
    id: transaction.id,
    label: transaction.type === 'income' ? 'Entrada: R$' + transaction.amount : 'Saída: R$' + transaction.amount
  }
}));
    

