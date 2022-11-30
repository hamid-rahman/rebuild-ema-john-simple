import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart ]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    const handleClick = ((products)=>{
        const newCart = [...cart, products];
        setCart(newCart);
    })
        // const newCart = [...cart, product];
        // setCart(newCart);

    return (
        <div>
            <div className="shop-component">
                <div className="product-component">
                    {
                        products.map(product=> <Product
                        key = {product.id}
                        handleClick={handleClick}
                        product = {product}
                        ></Product>)

                    }
                </div>
                <div className="card-component">
                    <Cart cart={cart}></Cart>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Shop;