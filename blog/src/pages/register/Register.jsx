import React from 'react'
import './register.css'
export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Enter Your Username"></input>
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Enter Your Email"></input>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Enter Your Password"></input>
                <button className="registerButton">Login</button>
                <button className="registerLoginButton">Register</button>
            </form>
        </div>
    )
}
