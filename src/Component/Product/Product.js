import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'
const Product = (props) => {
    const { name, price, img, seller, stock } = props.product;
    /* fontAwesome-Icon */
    const iconOfCart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <h2>{name}</h2>
                <h4>৳{price}</h4>
                <h5><small>Seller:{seller}</small></h5>
                <p>Only {stock} left in stock - order soon</p>
                <button className="cart-btn" onClick={() => props.handelProducts(props.product)}>{iconOfCart} Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;