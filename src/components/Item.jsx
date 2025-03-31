import React from 'react';

function Item ({item}) {
    return (
        <div className="item-list-container">
            <div className="item-card">
                <img src={item.thumbnail} alt={item.title} />
                <h2>{item.title}</h2>
                <p>${item.price}</p>
                <p>{item.description}</p>
                <p>{item.category}</p>
                <button>Agregar a Carrito</button>
            </div>
    </div>
    );
}

export default Item;