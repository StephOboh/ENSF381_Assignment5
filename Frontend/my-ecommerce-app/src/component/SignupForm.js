/*
=========================================================
Name        : SignupForm.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : The signup form for a new user
=========================================================
*/

import React, { useState } from 'react';
import './LoginPage.css';

const SignupForm = ({ switchLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState({ message: '' });

  const validate = async (e) => {
    e.preventDefault();

    let errorMessage = '';

    if (!username.trim() || !password.trim() || !confirmPassword.trim() || !email.trim()) {
      errorMessage = 'All fields are required!';
    } else if (password !== confirmPassword) {
      errorMessage = 'Passwords do not match!';
    }

    setFormErrors({ message: errorMessage });

    if (!errorMessage) {
      try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password, email }),
        });

        if (response.ok) {
          const data = await response.json();
          // Assuming the server sends back a message upon successful signup
          setFormErrors({ message: data.message });
        } else if (response.status === 400) {
          const data = await response.json();
          setFormErrors({ message: data.message });
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        setFormErrors({ message: 'An error occurred during signup. Please try again later.' });
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
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
        <label htmlFor="confirmPwd">Confirm Password: </label>
        <input 
          type="password" 
          id="confirmPwd" 
          name="confirmPwd" 
          placeholder="Confirm your password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
        /><br />
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        /><br />
        <button type="submit">Signup</button><br />
      </form>
      <button type="button" onClick={switchLogin}>Switch to Login</button>
    </div>
  );
}

export default SignupForm;
