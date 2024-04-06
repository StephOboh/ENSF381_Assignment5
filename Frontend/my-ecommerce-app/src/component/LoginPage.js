/*
=========================================================
Name        : LoginPage.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : Implement the components of the login page and the signup page
=========================================================
*/

import React, { useState } from 'react';
import Header from './Header';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import Footer from './Footer';

const LoginPage = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const switchToSignup = () => {
        setShowLoginForm(false);
    };

    const switchToLogin = () => {
        setShowLoginForm(true);
    };

    return (
        <div>
            <Header />
            {showLoginForm ? 
                <LoginForm switchToSignup={switchToSignup} /> : 
                <SignupForm switchToLogin={switchToLogin} />
            }
            <Footer />
        </div>
    );
}

export default LoginPage;

