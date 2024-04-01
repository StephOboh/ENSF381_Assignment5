/*
=========================================================
Name        : ProductPage.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Handles product management and cart functionality
=========================================================
*/

import React, { useState, useEffect } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';
import Footer from './Footer';
import productsData from '../data/products';

const ProductPage = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === product.id);

    if (existingItemIndex !== -1) {
      updatedCart[existingItemIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex(item => item.id === productId);

    if (existingItemIndex !== -1) {
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };

  return (
    <div className="product-page">
      <Header />

      <table style={{ width: '100%' }}>
        <tr>
          <td style={{ width: '70%' }}>
            <ProductList products={productsData} addToCart={addToCart} />
          </td>
          <td style={{ width: '30%', verticalAlign: 'top' }}>
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </td>
        </tr>
      </table>

      <Footer />
    </div>
  );
};

export default ProductPage;















