import React from "react";
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className="auth"> 
            <h1>Register</h1>
            <form class = "auth-form">
                <input required type="text" placeholder="email" />
                <input required type="password" placeholder="password" />
                <button>Login</button>
                <p>Incorrect email or password</p>
                <span>Have an account? <Link to="/login">Login</Link></span>
            </form>
        </div>
    )
}

export default Register