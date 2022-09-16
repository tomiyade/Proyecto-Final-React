import React from 'react'
import { Link } from 'react-router-dom'

const Items = (products) => {
    return (
        <div className="col-lg-4">
            <div className="text-center card-box">
                <div className="member-card pt-2 pb-2">
                    <div className="thumb-lg member-thumb mx-auto">
                        <img
                            src={products.img}
                            className="rounded-circle img-thumbnail"
                            alt="profile-image"
                        />
                    </div>
                    <div>
                        <h4>Nombre: {products.name}</h4>
                        <p className="text-muted">Precio: {products.price}</p>
                        <Link to="/titulares/"><button>Agregar al Carrito</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items