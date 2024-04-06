/*
=========================================================
Name        : App.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Sets up routes for Homepage and ProductPage
=========================================================
*/

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
// import Homepage from './component/Homepage';
// import Productpage from './component/Productpage';

// function App() {
//   return (
//       <Router> 
//         <Routes>
//           <Route path="/" element={<Homepage />} /> 
//           <Route path="/products" element={<Productpage />}/>
//         </Routes>
//       </Router>

//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage'; // Import your LoginPage component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user's authentication status

  // Function to handle user login
  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
  };

  return (
    <Router> 
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        {/* If user is logged in, render Productpage, otherwise redirect to login */}
        <Route path="/products" element={isLoggedIn ? <Productpage /> : <Navigate to="/login" />} />
        {/* Route to LoginPage component */}
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;
