import React from 'react'

import './ButtonCart.css';

export const ButtonCart = () => {
    return (
        <div className="buttonCartStyle">
            {/* onClick={ () => store.dispatch(toggleShoppingCart(true)) } */}
            <button className="buttonStyle"  >
                <i className="iconCartStyle fa fa-shopping-cart" aria-hidden="true"></i>
            </button>
            {/* <span className="productsCountStyle">{ products }</span> */}
            <span className="productsCountStyle">1</span>
        </div>
    )
}
