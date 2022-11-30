import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleClick} = props
    const {ratings,price,name,id,seller,img}= props.product;

    
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h5>{name}</h5>
            <h5>Price: {price} Tk</h5>
            <div className="pera">
            <p>Manufacturer : {seller}</p>
            <p>Rating: {ratings}</p>
            </div>
            
            <button className='btn' onClick={()=>handleClick(props.product)}>Add To Card</button>
        </div>
    );
};

export default Product;