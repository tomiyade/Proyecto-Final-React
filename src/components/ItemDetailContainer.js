import { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getItem } from "../Api"
import NavBar from './NavBar';

const ItemDetailContainer = ({ item }) => {
    <NavBar />
    const [product, setProduct] = useState({});
    useEffect(() => {

        getItem().then((product) => {
            setProduct(product)
        });
    }, [])


    return (
        <ItemDetail item={product} />
    )
}

export default ItemDetailContainer