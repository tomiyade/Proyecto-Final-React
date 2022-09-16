export const getItem = () => new Promise((resolve, reject) => {
    setTimeout(() => resolve(
        {
            id: 1,
            name: "Camiseta Titular Boca Juniors",
            price: "12500",
            img: 'https://bocashop.vteximg.com.br/arquivos/ids/168359-1000-1000/HE6323_1.jpg?v=637922173219300000',
        },
    ), 2000)
});