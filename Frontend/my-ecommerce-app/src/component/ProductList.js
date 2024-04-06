/*
=========================================================
Name        : ProductList.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Maps products and renders ProductItem for each
=========================================================
*/

import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList(props){
  const [products, setProducts] = useState([]);

  useEffect(() => {
      fetch('http://127.0.0.1:5000/products', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'}
          })
          .then(response => {
              if (response.ok) {
                  return response.json();
              } else {
                  throw new Error('API call failed');
              }
          })
          .then(data => setProducts(data))
          .catch(error => console.log(error));
      }, []);

  return(
      <div className="product-list">
          {products.map(product => (
              <ProductItem key={product.id} product={product} addToCart={props.addToCart} />
          ))}
      </div>
  );
};

export default ProductList;
