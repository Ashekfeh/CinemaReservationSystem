import React from "react";
import './Contact.css';

import alien from '../../assets/alien-pixelated-shape-of-a-digital-game.png'
import pin from '../../assets/location-green.png'
import mail from '../../assets/mail.png'

export default function Contact() {
    return (
        <div className="wrapper">
            <div className="info">
                <div>
                    <img src={pin} alt="" />
                        <h2>pay us a visit</h2>
                        <ul>
                            <li>- Mahmutbey, Dilmenler Cd. No:26, 34217 Bagcilar/istanbul</li>
                            <li>- Esentepe, Sisli Buyukdere Cd. No:147, 34349 Besiktas/sstanbul</li>
                            <li>- Zuhuratbaba, Incirli Cd. No:11-A, 34147 Bakirkoy/Istanbul</li>
                        </ul>
                </div>
                <div>
                    <img src={alien} alt="" />
                        <h2>find us on social media!</h2>
                        <div className="social">
                            <img src="../../assets/facebook.png" alt="" />
                                <a href="">/digitalWatch</a>
                        </div>
                        <div className="social">
                            <img src="assets/instagram.png" alt="" />
                                <a href="">@DigitalWatch</a>
                        </div>
                        <div className="social">
                            <img src="assets/twitter.png" alt="" />
                                <a href="">@RealDigitalWatch</a>
                        </div>
                </div>
                <div>
                    <img src={mail} alt="" />
                        <h2>have an issue? send us an email</h2>
                        <a href="">support.desk@DigitalWatch.com</a>

                </div>
            </div>
        </div>
    )
}