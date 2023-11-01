import React from 'react';
import './Products.css'

const Products = ({product}) => {
    const {name,img,seller,price, ratting} = product;
    return (
        <div className='product'>
            <img src={img} alt="product img" />
            <div className='product-details'>
                <p className='product-name'> {name}</p>
                <p>Price: {price}</p>
                <p><small>Seller:{seller}</small></p>
                <p><small>Rattings:{ratting}</small></p>             
            </div>
            <button className='btn-cart'>Add To Cart</button>
        </div>
    );
};

export default Products;