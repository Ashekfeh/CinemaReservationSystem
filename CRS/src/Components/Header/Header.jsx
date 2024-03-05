import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className="wrapper navi">
                <nav>
                    <div className="nav-left">
                        <Link id='logo' to="/"><div className="logo">DIGITAL WATCH</div></Link>
                        <Link to='/' href="index.html">HOME</Link>
                        <Link to='/contactus' href="contact-us.html">CONTACT US</Link>
                    </div>
                    <div className="nav-right">
                        <Link to='login' className="login" href="login.html">log in</Link>
                        <Link to='signup' className="signup" href="signup.html">sign up</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}