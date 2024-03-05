import React from "react";
import './Login.css';
import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="wrapper">
            <div className="user-info crt">
                <h2>LOG IN</h2>
                <div className="username">
                    <h4>username</h4>
                    <input type="text" placeholder="username"/>
                </div>
                <div className="password">
                    <h4>password</h4>
                    <input type="text" placeholder="password"/>
                        <a href="#">forgot password?</a>
                </div>
                <a className="login ui" href="#">LOG IN</a>
            </div>
            <div className="signup-route">
                <span>Don't have an account?</span> <Link to='/signup'>Click here</Link>
            </div>
        </div>
    )
}