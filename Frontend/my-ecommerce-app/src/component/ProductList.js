/*
=========================================================
Name        : ProductList.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Maps products and renders ProductItem for each
=========================================================
*/

// import React from 'react';
// import ProductItem from './ProductItem';

// const ProductList = ({ products, addToCart }) => {
//   return (
//     <div className="product-list">
//       {/* Map through products array and render ProductItem for each product */}
//       {products.map((product) => (
//         <ProductItem key={product.id} product={product} addToCart={addToCart} />
//       ))}
//     </div>
//   );
// };

// export default ProductList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = ({ addToCart }) => {
  // State to store the fetched products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the backend API
    axios.get('http://localhost:5000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="product-list">
      {/* Map through products array and render ProductItem for each product */}
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

