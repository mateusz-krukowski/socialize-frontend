import React from "react";
import './RegisterCard.css'

export default function RegisterCard() {

    const validatePassword = () => {
        var password = document.getElementById("password");
        var confirm_password = document.getElementById("confirm-password");

        if (password.value !== confirm_password.value) {
            confirm_password.setCustomValidity("Passwords need to match");
        }
    }

    return (
        <div className='RegisterCard'>
            <form className='register-form' action='/register' method='POST'>
                <label>email</label>
                <input type='email' placeholder='you@example.com' />
                <label>username</label>
                <input type='text' placeholder='pick your username' />
                <label>password</label>
                <input type='password' id='password' placeholder='create a password' onChange={validatePassword} />
                <label>confirm your password</label>
                <input type='password' id='confirm-password' placeholder='confirm your password' onChange={validatePassword} />
                <input className='submit' type='submit' value='Sign Up' />
            </form>
        </div>
    )
}