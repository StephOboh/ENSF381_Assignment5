/*
=========================================================
Name        : LoginForm.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : The login form for an existing user
=========================================================
*/
// switchSignup function will be written in the actual login page 

// import React, { useState } from 'react';

// const LoginForm = ({ switchSignup }) => {
//   const [formErrors, setFormErrors] = useState({ message: '' });

//   const validate = (e) => {
//     e.preventDefault();
    
//     const formData = new FormData(e.target);

//     // Check if any form element is empty
//     let formValid = true;
//     formData.forEach((value) => {
//       if (!value.trim()) {
//         formValid = false;
//       }
//     });

//     if (formValid === false) {
//       setFormErrors({ message: "All fields are required!" });
//     } 
//     else {
//       // Reset error message if form is valid
//       setFormErrors({ message: '' });
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {formErrors.message && <p className="error">{formErrors.message}</p>}
//       <form onSubmit={validate}> 
//         <label htmlFor="username">Username: </label>
//         <input type="text" id="username" name="username" placeholder="Enter your username" /><br></br>
//         <label htmlFor="password">Password: </label>
//         <input type="password" id="password" name="password" placeholder="Enter your password" /><br></br>
//         <button type="submit">Login</button><br></br>
//       </form>
//       <button type="button" onClick={switchSignup}>Switch to Signup</button>
//     </div>
//   );
// }

// export default LoginForm;

// import React, { useState } from 'react';
// import { useAuthContext } from '../App.js';
// import SignupForm from './SignupForm'; // Import the SignupForm component

// const LoginForm = ({ switchSignup }) => { // Accept switchSignup prop
//   const { setAuthenticated } = useAuthContext();
//   const [formErrors, setFormErrors] = useState({ message: '' });

//   const validate = async (e) => {
//     e.preventDefault();

//     let errorMessage = '';

//     // Your validation logic here...
//     const formData = new FormData(e.target);

//     if (!formData.get('username') || !formData.get('password')) {
//       errorMessage = 'All fields are required!';
//     }

//     setFormErrors({ message: errorMessage });

//     if (!errorMessage) {
//       try {
//         const response = await fetch('http://127.0.0.1:5000/login', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             username: formData.get('username'),
//             password: formData.get('password'),
//           }),
//         });

//         if (response.ok) {
//           setAuthenticated(true); // Set authenticated state upon successful login
//           window.location.href = '/products'; // Redirect user to the products page
//         } else {
//           throw new Error('Login failed');
//         }
//       } catch (error) {
//         setFormErrors({ message: "An error occurred during login. Please try again later." });
//       }
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {formErrors.message && <p className="error">{formErrors.message}</p>}
//       <form onSubmit={validate}>
//         <label htmlFor="username">Username: </label>
//         <input type="text" id="username" name="username" placeholder="Enter your username" /><br></br>
//         <label htmlFor="password">Password: </label>
//         <input type="password" id="password" name="password" placeholder="Enter your password" /><br></br>
//         <button type="submit">Login</button><br></br>
//       </form>
//       {/* Add the "Switch to Signup" button */}
//       <button type="button" onClick={switchSignup}>Switch to Signup</button>
//     </div>
//   );
// };

// export default LoginForm;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router
import { useAuthContext } from '../App.js';

const LoginForm = ({ switchSignup }) => {
  const { setAuthenticated } = useAuthContext();
  const [formErrors, setFormErrors] = useState({ message: '' });
  const navigate = useNavigate(); // Initialize navigate hook

  const validate = async (e) => {
    e.preventDefault();

    let errorMessage = '';

    // Your validation logic here...
    const formData = new FormData(e.target);

    if (!formData.get('username') || !formData.get('password')) {
      errorMessage = 'All fields are required!';
    }

    setFormErrors({ message: errorMessage });

    if (!errorMessage) {
      try {
        const response = await fetch('http://127.0.0.1:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: formData.get('username'),
            password: formData.get('password'),
          }),
        });

        if (response.ok) {
          setAuthenticated(true); // Set authenticated state upon successful login
          navigate('/products'); // Redirect user to the products page using React Router
        } else {
          throw new Error('Login failed');
        }
      } catch (error) {
        setFormErrors({ message: "An error occurred during login. Please try again later." });
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {formErrors.message && <p className="error">{formErrors.message}</p>}
      <form onSubmit={validate}>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" placeholder="Enter your username" /><br></br>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" placeholder="Enter your password" /><br></br>
        <button type="submit">Login</button><br></br>
      </form>
      <button type="button" onClick={switchSignup}>Switch to Signup</button>
    </div>
  );
};

export default LoginForm;
