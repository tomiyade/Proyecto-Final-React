import React from 'react'

const ItemDetail = ({ item }) => (
    <div className="col-lg-4">
        <div className="text-center card-box">
            <div className="member-card pt-2 pb-2">
                <div className="thumb-lg member-thumb mx-auto">
                    <img
                        src={item.img}
                        className="rounded-circle img-thumbnail"
                        alt="profile-image"
                    />
                </div>
                <div>
                    <h4>Nombre: {item.name}</h4>
                    <p className="text-muted">Precio: {item.price}</p>
                </div>
            </div>
        </div>
    </div>
)

export default ItemDetail