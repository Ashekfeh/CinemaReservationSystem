import React from "react";
import './Checkout.css';

export default function Checkout() {
    return (
        <div className="wrapper">
            <div className="user-info co">
                <div className="page-title">
                    <h2>PAYMENT METHOD</h2>
                </div>
                <div className="input-field">
                    <input type="text" placeholder="card name" />
                    <input type="text" placeholder="card number" />
                    <div className="security">
                        <input className="exp" type="month" placeholder="exp" />
                        <input className="cvv" type="number" placeholder="cvv" />
                    </div>
                </div>
                <a className="complete" href="splashscreen.html">COMPLETE RESERVATION</a>
            </div>
        </div>
    )


}