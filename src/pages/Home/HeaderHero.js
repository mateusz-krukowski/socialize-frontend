import React, {useState} from "react";
import Cookies from "js-cookie";
import {fetchData} from "../../API";
import './HeaderHero.css'

export default function HeaderHero({setIsAuthenticated}) {
    const [data,setData] = useState({email:"",password:"",isAdmin:""})
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData({...data, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(data);

        fetchData('http://127.0.0.1:5000/login', 'POST', data)
            .then((response) => {
                console.log(response.data);
                if (response.status === 200) {
                    alert(response.data.response);
                    setIsAuthenticated(true);
                    Cookies.set('isAuthenticated', 'true', { expires: 7 });
                    console.log(response.data.username)
                    Cookies.set('username',response.data.username,{expires: 7})
                    Cookies.set('isAdmin',response.data.isAdmin,{expires: 7})

                } else {
                    alert(response.data.response);
                }
            })
            .catch((error) => {
                console.error('Błąd podczas wysyłania danych:', error);
            });
    };

    return(<header>
        <h1 className='logo-title'>Socialize</h1>
        <form className='login-form' action='/login' method='POST' onSubmit={handleSubmit}>
            <input className='input' id='email' name='email' onChange={handleChange} value={data.email} type='email' placeholder='email'/>
            <input className='input' id='password' name='password' onChange={handleChange} value={data.password} type="password" placeholder='password'/>
            <input className='submit' type='submit' value='Sign in'/>
        </form>
    </header>)
}