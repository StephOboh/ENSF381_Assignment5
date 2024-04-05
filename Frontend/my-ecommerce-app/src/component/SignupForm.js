/*
=========================================================
Name        : SignupForm.js
Assignment  : Assignment 5
Author(s)   : Sarah Yip (UCID: 30174831), Stephenie Oboh (UCID: 30151629)
Submission  : April 7, 2024
Description : The signup form for a new user
=========================================================
*/

import React from 'react';

const SignupForm = () => {
    return (
        <div>
            <h2>Signup</h2>
            {/* change so it will be hidden until the username is checked in backend  */}
            <div class = "checkUser" id="checkUser" style = "display: none;">
                <p id="message"></p>
            </div>

            <form action = "add action to check inuputs here"> 
                <label for="username">Username: </label>
                <input type ="text" id ="username" name ="username" placeholder ="Enter your username" required></input><br></br>
                <label for = "password">Password: </label>
                <input type ="password" id ="password" name = "password" placeholder='Enter your password' required></input><br></br>
                <label for = "confirmPwd">Confirm Password: </label>
                <input type ="password" id ="confirmPwd" name = "confirmPwd" placeholder='Confirm your password' required></input><br></br>
                <label for = "email">Email: </label>
                <input type ="email" id ="email" name = "email" placeholder='Enter your Email8' required></input><br></br>
                <input type ="submit">Signup</input><br></br>
            </form>
            {/* switch to login page  */}
        </div>
    );
}