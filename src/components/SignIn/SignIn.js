import React from 'react'
import './signin.css'

const SignIn = ({ handleSignin, goToRegister, handleSetEmail, handleSetPassword }) => {
    return (
        <div className='signin-form-container'>
            <h1>Sign In</h1>
            <form className='signin-form' onSubmit={handleSignin}>
                <label htmlFor="email-input-signin">Email Address</label>
                <input type="email" placeholder='Email address' id='email-input-signin' className='signin-input' onChange={handleSetEmail} required/>
                <label htmlFor="password-input-signin">Password</label>
                <input type="password" placeholder='Password' id='password-input-signin' className='signin-input' onChange={handleSetPassword} required/>
                <button className='submit-button' type='submit'>Sign In</button>
                <a href="#" className='already-account' onClick={goToRegister}>Don't have an account ?</a>
            </form>
        </div>
    )
}

export default SignIn