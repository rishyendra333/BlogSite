import React from "react"
import {Link} from 'react-router-dom'
import Logo from "../img/Blog-logo.png"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="logo">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="links">
                    <span className="addblog">
                        <Link to="/add-blog">Create</Link>
                    </span>
                    <span className="login-link">
                        <Link to="/login">Login</Link>
                    </span>
                    <span className="register-link">
                        <Link to="/register">Register</Link>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Navbar