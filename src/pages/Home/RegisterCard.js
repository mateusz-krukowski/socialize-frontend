import React, {useState} from "react";
import {fetchData} from "../../API";
import './RegisterCard.css'

export default function RegisterCard() {
    const [data,setData] = useState({email:"",username:"",password:""})

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data)

        fetchData('http://127.0.0.1:5000/register', "POST", data)
            .then((response) => {
                console.log(response);
                alert(response["data"]["response"]);
            })
            .catch((error) => {
                console.error("Error sending data:", error);
            });
    };

    return (
        <div className='RegisterCard'>
            <form className='register-form' action='/register' method='POST' onSubmit={handleSubmit}>
                <label>email</label>
                <input type='email' id='email' name='email' onChange={handleChange} value={data.email} placeholder='you@example.com'/>
                <label>username</label>
                <input type='text' id='username' name='username' onChange={handleChange} value={data.username} placeholder='pick your username' />
                <label>password</label>
                <input type='password' id='password' name='password' onChange={handleChange} value={data.password} placeholder='create a password'/>
                <input className='submit' type='submit' value='Sign Up' />
            </form>
        </div>
    )
}