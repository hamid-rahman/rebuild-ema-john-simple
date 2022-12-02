import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { fakeDb, getStoredCart } from '../../utilities/fakeDb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart ]= useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])

    useEffect(()=>{
        const storedCart = getStoredCart();
        for(const id in storedCart){
            const addedProduct = products.find(product => product.id === id );
        console.log(addedProduct)
        }
        
    },[])

    const handleClick = ((products)=>{
        const newCart = [...cart, products];
        setCart(newCart);
        fakeDb(products.id)
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