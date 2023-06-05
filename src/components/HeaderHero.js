import React from "react";
import './HeaderHero.css'

export default function HeaderHero() {
    return(<header>
        <h1 className='logo-title'>Socialize</h1>
        <form className='login-form'>
            <input className='input' type='text' placeholder='login'/>
            <input className='input' type="password" placeholder='password'/>
            <input className='submit' type='submit' value='Sign in'/>

        </form>
    </header>)
}