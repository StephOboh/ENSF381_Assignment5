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


const SignupForm = ({switchLogin}) => {
    //  add a way to check if the password and confirmm password is the same BEFORE submitting
    const [formErrors, setFormErrors] = useState({ message: '' });
    const [correctConfirmPwd, setCorrectConfirmPwd] = useState(true);

    const validate = (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);

        // Initialize error message
        let errorMessage = '';

        // Check if any form element is empty
        let formFilled = true;
        formData.forEach((value) => {
            if (!value.trim()) {
                formFilled = false;
                errorMessage += "All fields are required!\n";
            }
        });

        // Check if password and confirm password match
        const password = formData.get('password');
        const confirmPwd = formData.get('confirmPwd');
        if (password !== confirmPwd) {
            setCorrectConfirmPwd(false);
            errorMessage += "Passwords do not match!\n";
        }

        // Set form errors
        setFormErrors({ message: errorMessage.trim() });
    };

    return (
        <div>
            <h2>Signup</h2>
            {formErrors.message && <p className="error">{formErrors.message}</p>}
            <form onSubmit={validate}> 
                <label for="username">Username: </label>
                <input type ="text" id ="username" name ="username" placeholder ="Enter your username" ></input><br></br>
                <label for = "password">Password: </label>
                <input type ="password" id ="password" name = "password" placeholder='Enter your password' ></input><br></br>
                <label for = "confirmPwd">Confirm Password: </label>
                <input type ="password" id ="confirmPwd" name = "confirmPwd" placeholder='Confirm your password' ></input><br></br>
                <label for = "email">Email: </label>
                <input type ="email" id ="email" name = "email" placeholder='Enter your Email8' ></input><br></br>
                <input type ="submit">Signup</input><br></br>
            </form>
            <button type ="button" onClick={switchLogin}>Switch to Login</button>
        </div>
    );
}

export default SignupForm;