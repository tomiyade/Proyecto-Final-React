import React, { useState } from 'react'
import Items from './Items';
import NavBar from './NavBar';


const ItemListContainer = () => {

    const [items, setItems] = useState([
        {
            id: 1,
            name: "Camiseta Titular Boca Juniors",
            price: "12500",
            img: 'https://bocashop.vteximg.com.br/arquivos/ids/168359-1000-1000/HE6323_1.jpg?v=637922173219300000',
        },
        {
            id: 2,
            name: "Camiseta Titular River Plate",
            price: "12500",
            img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/42f6e0d4f39047e8b476aee60109bc4c_9366/Camiseta_Titular_River_Plate_22-23_Blanco_GB7592_01_laydown.jpg',

        },
        {
            id: 3,
            name: "Camiseta  Independiente de Avellaneda",
            price: "10000",
            img: 'https://sporting.vtexassets.com/arquivos/ids/377655-800-800?v=637692450793900000&width=800&height=800&aspect=true',

        },
    ]);


    return (
        <div className='row'>
            {items.map(item => {
                return <Items
                    key={item.id}
                    name={item.name}
                    img={item.img}
                    price={item.price}
                />
            })}
        </div>
    )

}

export default ItemListContainer
