/*
=========================================================
Name        : App.js
Assignment  : Assignment 4
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : March 24, 2024
Description : Sets up routes for Homepage and ProductPage
=========================================================
*/

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from './component/Homepage';
import Productpage from './component/Productpage';
import LoginPage from './component/LoginPage';

function App() {
  return (
      <Router> 
        <Routes>
          <Route path="/" element={<Homepage />} /> 
          <Route path="/products" element={<Productpage />}/>
          <Route path= "/login" element ={<LoginPage />} />
        </Routes>
      </Router>

  );
}

export default App;
