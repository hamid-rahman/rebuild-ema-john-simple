import React from 'react';
import { removeFromDb } from '../../utilities/fakeDb';
import './Cart.css';

const Cart = (props) => {
    const { cart} = props;
    let total = 0;
    let shipping = 0;

    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    }

    const tax =  Math.round(total * 10/100) ;
    const grandTotal = total + shipping + tax;


    // let total= 0;
    // for(let product of cart){
    //     total=total+product.price;
    // }

    const removeFromCart = id =>{
        removeFromDb(id);
        console.log(id)
    }

    return (
        <div className="cart">
            <h4>Order Summery</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: $ {total}  Tk </p>
            <p>Total Shipping Charge: $ {shipping} </p>
            <p>Tax: $ {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>

            <button onClick={()=> removeFromCart(props.id)} className="btn-clear">Clear Cart</button><i class="fa-regular fa-trash-can"></i>
            <button className="btn-review-Order">Review Order</button>
        </div>
    );
};

export default Cart;