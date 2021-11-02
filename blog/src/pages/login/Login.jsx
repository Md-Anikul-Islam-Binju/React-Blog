import React from 'react'
import './login.css'
export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="Enter Your Email"></input>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Enter Your Password"></input>
                <button className="loginButton">Login</button>
                <button className="loginRegisterButton">Register</button>
            </form>
        </div>
    )
}
