import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }



    // let total= 0;
    // for(let product of cart){
    //     total=total+product.price;
    // }
    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}  Tk </p>
            <p>Total Shipping Charge: </p>
            <p>Tax:</p>
            <h5>Grand Total: </h5>

            <button className="btn-clear">Clear Cart</button><i class="fa-regular fa-trash-can"></i>
            <button className="btn-review-Order">Review Order</button>
        </div>
    );
};

export default Cart;