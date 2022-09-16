import React, { useState, useEffect } from 'react'
import { getProducts } from '../Api';


const ItemList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getInfo = async () => {
            const items = await getProducts()
            console.log(items)
            setProducts(items);
        }
        getInfo();
    }, [])


    return (
        <ul>
            {products.map(item => (
                <item key={item.id} item={item} />
            ))}
        </ul>
    )
}

export default ItemList