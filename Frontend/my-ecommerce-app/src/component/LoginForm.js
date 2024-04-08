/*
=========================================================
Name        : LoginForm.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : The login form for an existing user
=========================================================
*/

import React, { useState } from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const LoginForm = ({ switchSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [formErrors, setFormErrors] = useState({ message: '' });
  const navigate = useNavigate(); // Initialize navigate function

  const validate = async (e) => {
    e.preventDefault();

    // Check if either username or password is empty
    if (!username || !password) {
      setFormErrors({ message: 'All fields required' });
      return; // Stop further execution
    }
    
    try {
      const response = await fetch('http://127.0.0.1:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Assuming the server sends back a message upon successful login
        const data = await response.json();
        setFormErrors({ message: data.message });
        // Redirect to products page after successful login
        navigate('/products');
      } else if (response.status === 401) {
        // Unauthorized access (incorrect username or password)
        const data = await response.json();
        setFormErrors({ message: data.message });
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      setFormErrors({ message: 'An error occurred during login. Please try again later.' });
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {formErrors.message && <p className="error">{formErrors.message}</p>}
      <form onSubmit={validate}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        <button type="submit">Login</button><br />
      </form>
      <button type="button" onClick={switchSignup}>Switch to Signup</button>
    </div>
  );
}

export default LoginForm;
