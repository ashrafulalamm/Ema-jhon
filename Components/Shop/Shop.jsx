import React, { useEffect, useState } from 'react';
import './Shop.css'
import Navbar from '../Shared/Navbar/Navbar';
import Products from '../Products/Products';
const Shop = () => {
 
    const [products, setProducts] = useState ([]);
        useEffect(() => {
            fetch('product.json')
                .then(res => res.json())
                .then(data => setProducts(data))
        }, [])

    return (
        
        <>
        <Navbar></Navbar>
                <div className="shop-container">

                <div className="product-container">
                    {
                    products.map(product=>  <Products
                    key={product.id}
                    product={product}
                    ></Products>)
                    }
                    
                </div>
                <div className="cart-container">
                    <h5>Order Summary</h5>
                    
                </div>
            </div> 
        </>
    );
};

export default Shop;




{/* <h3>Ultraboost 22 Shoes</h3>
                    <h4>Price: $190 </h4>
                    <p>Manufacturer : Addidas
                        <br />
                        Rating : 3 start
                        <button>Add to Cart</button> */}