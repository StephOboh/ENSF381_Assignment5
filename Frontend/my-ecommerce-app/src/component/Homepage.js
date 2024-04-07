/*
=========================================================
Name        : Homepage.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : Render header, main section and footer
=========================================================
*/

import React from 'react';
import Header from './Header';
import HomeMainSection from './HomeMainSection';
import Footer from './Footer';

const Homepage = () =>{
  return (
    <div>
      <Header />
      <HomeMainSection />
      <Footer />
    </div>
  );
}

export default Homepage;