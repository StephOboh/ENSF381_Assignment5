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
import React from 'react';


const LoginForm =({switchSignup}) => {

    return (
        <div>
            <h2>Login</h2>
            <form action = "add action to check inuputs here"> 
                <label for="username">Username: </label>
                <input type ="text" id ="username" name ="username" placeholder ="Enter your username" required></input><br></br>
                <label for = "password">Password: </label>
                <input type ="password" id ="password" name = "password" placeholder='Enter your password' required></input><br></br>
                <input type ="submit">Login</input><br></br>
            </form>
            <button type ="button" onClick={switchSignup}>Switch to Signup</button>

        </div>
    );
}

export default LoginForm;