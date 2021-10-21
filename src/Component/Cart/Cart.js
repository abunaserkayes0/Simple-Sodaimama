import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    const countItem = cart.reduce((prev, pd) => (prev + pd.quantity), 0);
    const carts = props.cart;
    let subTotal = 0;
    let shippingCostTotal = 0;
    let shippingCost = 0;
    let tax = 0;
    let total = 0;
    for (const cartProduct of carts) {
        shippingCost = cartProduct.shipping;
        subTotal = subTotal + cartProduct.price;
        shippingCostTotal = shippingCost + subTotal;
        tax = shippingCostTotal / 25;
        total= shippingCostTotal+tax;
    }
    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <h4>Items ordered:{countItem}</h4>
            <h3>subTotal:৳{subTotal.toFixed(2)}</h3>
            <h3>Shipping-Cost:৳{shippingCost}</h3>
            <h3>Shipping-Cost Total:৳{shippingCostTotal.toFixed(2)}</h3>
            <h3>Tax:৳{tax.toFixed(2)}</h3>
            <h2>Total:৳{total.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;