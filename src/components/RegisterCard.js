import React, {useState} from "react";
import {fetchData} from "../API";
import './RegisterCard.css'

export default function RegisterCard() {
    const [data,setData] = useState({email:"",username:"",password:""})
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data)

        fetchData('http://127.0.0.1:5000/register', "POST", data)
            .then((response) => {
                console.log(response);
                alert(response['response'])
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    };

    return (
        <div className='RegisterCard'>
            <form className='register-form' action='/register' method='POST' onSubmit={handleSubmit}>
                <label>email</label>
                <input type='email' name='email' placeholder='you@example.com'/>
                <label>username</label>
                <input type='text' name='username' placeholder='pick your username' />
                <label>password</label>
                <input type='password' name='password'  placeholder='create a password'/>
                <input className='submit' type='submit' value='Sign Up' />
            </form>
        </div>
    )
}