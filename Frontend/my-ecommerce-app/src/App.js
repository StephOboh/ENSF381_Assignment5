/*
=========================================================
Name        : App.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : Sets up routes for Homepage and ProductPage
=========================================================
*/

import './App.css';
import React, { createContext, useContext, useState } from 'react';
import Homepage from './component/Homepage.js';
import Productpage from './component/Productpage.js';
import Loginpage from './component/LoginPage.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);
export const AuthProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  return(
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/products" element={<Productpage />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;