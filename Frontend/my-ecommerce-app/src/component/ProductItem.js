/*
=========================================================
Name        : ProductItem.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : Display product details and add to cart
=========================================================
*/

import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const { name, image, price, description } = product;
  const [showDescription, setShowDescription] = useState(false);

  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="product-item">
      <img src={image} alt={name} style={{ width: '200px', height: '200px' }} />
      <div>
        <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ fontWeight: 'normal' }}>{name}</h3>
        <p>Price: ${price}</p>
        {/* Show description only when showDescription is true */}
        {showDescription && <p>Description: {description}</p>}
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductItem;
