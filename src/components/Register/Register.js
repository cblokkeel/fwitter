import React from 'react'
import './register.css'

const Register = ({ handleRegister, goToSignin }) => {
    return (
        <div className='register-form-container'>
            <form className='register-form' onSubmit={handleRegister}>
                <label htmlFor="email-input-register">Email Address</label>
                <input type="email" placeholder='Email address' id='email-input-register' className='register-input' required/>
                <label htmlFor="password-input-register">Password</label>
                <input type="password" placeholder='Password' id='password-input-register' className='register-input' required/>
                <button className='submit-button' type='submit'>Register</button>
                <a href="#" className='already-account' onClick={goToSignin}>Already an account ?</a>
            </form>
        </div>
    )
}

export default Register