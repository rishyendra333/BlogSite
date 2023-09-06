import React from "react";
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <div className="auth"> 
            <h1>Login</h1>
            <form class = "auth-form">
                <input required type="text" placeholder="email" />
                <input required type="password" placeholder="password" />
                <button>Login</button>
                <p>Incorrect email or password</p>
                <span>Do not have an account? <Link to="/register">Register</Link></span>
            </form>
        </div>
    )
}

export default Login