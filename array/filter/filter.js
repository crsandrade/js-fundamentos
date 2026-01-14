const products = [
    {id: 1, name: "Teclado", price: 120, inStock: true },
    {id: 1, name: "Mouse", price: 80, inStock: false },
    {id: 1, name: "Monitor", price: 900, inStock: true },
    {id: 1, name: "Cabo HDMI", price: 40, inStock: true },
];

const productsInStock = products.filter((prod) => prod.inStock)

const exibirProdutos = productsInStock.map((labelProduct) => {
    return {
        id: labelProduct.id,
        label: labelProduct.name + '- R$' + labelProduct.price 
    }
});

console.log(exibirProdutos)