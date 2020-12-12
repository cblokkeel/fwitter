import React from 'react'
import './register.css'

const Register = ({ handleRegister, goToSignin, handleSetEmail, handleSetPassword, handleSetUsername }) => {
    return (
        <div className='register-form-container'>
            <h1>Register</h1>
            <form className='register-form' onSubmit={handleRegister}>
                <label htmlFor="username-input-register">Username</label>
                <input type="text" placeholder='Username' id='username-input-register' className='register-input' onChange={handleSetUsername} required/>
                <label htmlFor="email-input-register">Email Address</label>
                <input type="email" placeholder='Email address' id='email-input-register' className='register-input' onChange={handleSetEmail} required/>
                <label htmlFor="password-input-register">Password</label>
                <input type="password" placeholder='Password' id='password-input-register' className='register-input' onChange={handleSetPassword} required/>
                <button className='submit-button' type='submit'>Register</button>
                <a href="#" className='already-account' onClick={goToSignin}>Already an account ?</a>
            </form>
        </div>
    )
}

export default Register