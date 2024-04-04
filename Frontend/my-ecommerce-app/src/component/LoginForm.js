/*
=========================================================
Name        : LoginForm.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : The login form for an existing user
=========================================================
*/
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
 

const LoginForm =() => {

    return (
        <div>
        <form action = "add action to check inuputs here"> 
            <label for="username">Username: </label>
            <input type ="text" id ="username" name ="username" placeholder ="Enter your username" required></input><br></br>
            <label for = "password">Password: </label>
            <input type ="password" id ="password" name = "password" placeholder='Enter your password' required></input><br></br>
            <input type ="submit">Login</input><br></br>
        </form>
        {/* change to signup as form not a link
        when button is pressed should hid the login in form 
        and display the signup form instead */}
        <Link to="/Signup"><button type ="button">Switch to Signup</button></Link> 

        </div>
    );
}

export default LoginForm;