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
    const [formErrors, setFormErrors] = useState({ message: '' });

    const validate = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        // Check if any form element is empty
        let formValid = true;
        formData.forEach((value) => {
            if (!value.trim()) {
                formValid = false;
            }
        });

        if (formValid == false) {
            setFormErrors({ message: "All fields are required!" });
        } 
        else {
            // Reset error message if form is valid
            setFormErrors({ message: '' });
        }
    }
    

    return (
        <div>
            <h2>Login</h2>
            {formErrors.message && <p className="error">{formErrors.message}</p>}
            <form onSubmit={validate}> 
                <label for="username">Username: </label>
                <input type ="text" id ="username" name ="username" placeholder ="Enter your username" ></input><br></br>
                <label for = "password">Password: </label>
                <input type ="password" id ="password" name = "password" placeholder='Enter your password' ></input><br></br>
                <input type ="submit">Login</input><br></br>
            </form>
            <button type ="button" onClick={switchSignup}>Switch to Signup</button>
        </div>
    );
}

export default LoginForm;