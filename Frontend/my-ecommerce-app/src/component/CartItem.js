/*
=========================================================
Name        : CartItem.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : Display individual item details in cart
=========================================================
*/

import React from 'react';

function CartItem({item, removeFromCart}) {
  function handleRemove() {
    removeFromCart(item);
  }
  return (
    <div className="cart-item" >
      <img src={item.image} alt={item.name} style={{ width: '200px', height: '200px' }} />
      <div>
        <p>{item.name}</p>
        <p>Price: ${item.price}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Total: ${item.price * item.quantity}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;


