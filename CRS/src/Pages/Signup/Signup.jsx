import React from "react";
import './Signup.css';
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <div class="wrapper">
            <div class="user-info crt">
                <h2>SIGN UP</h2>
                <div class="username">
                    <h4>username</h4>
                    <input type="text" placeholder="username" />
                </div>
                <div class="username">
                    <h4>e-mail</h4>
                    <input type="text" placeholder="example@123.com..." />
                </div>
                <div class="username">
                    <h4>telephone</h4>
                    <input type="tel" placeholder="+901234567890" />
                </div>
                <div class="username">
                    <h4>password</h4>
                    <input type="text" placeholder="password" />
                </div>
                <div class="password">
                    <h4>repeat password</h4>
                    <input type="text" placeholder="password" />
                </div>
                <a class="login ui" href="#">LOG IN</a>
            </div>
            <div class="signup-route">
                <span>Already A member?</span> <Link to='/login'>Click here</Link>
            </div>
        </div>
    )
}