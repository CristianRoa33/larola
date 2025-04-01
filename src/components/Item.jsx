import React from 'react';

function Item ({item}) {
    
    return (
        <div className="item-list-container">
            <div className="item-card">
                <img src={item.thumbnail} alt={item.image} />
                <h2>{item.title}</h2>
                <p>{item.category}</p>
                <button >Ver mas</button>
            </div>
    </div>
    );
}

export default Item;