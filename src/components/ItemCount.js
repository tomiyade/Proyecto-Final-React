import React, { useEffect, useState } from 'react'



const ItemCount = () => {

    const [miEstado, setMiEstado] = useState(0)



    return (
        <>
            <div>
                <button onClick={() => setMiEstado(miEstado + 1)}>+</button>
                <button onClick={() => setMiEstado(miEstado - 1)}>-</button>
                <p>Numero: {miEstado}</p>

            </div>


        </>



    )
}

export default ItemCount;