/*
=========================================================
Name        : LoginPage.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : Implement the components of the login page and the signup page
=========================================================
*/
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginPage';


const LoginPage =() => {

    return (
        <div>
            <Header />
            <LoginForm />
            <Footer />
        </div>

    );
}

export default LoginPage;


