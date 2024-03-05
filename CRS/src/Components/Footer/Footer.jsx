import React from "react";
import './Footer.css';

export default function Footer() {
    return (
        <div className="wrapper">
            <footer>
                <div className="icons">
                    <div className="facebook"><i className="fa-brands fa-square-facebook"></i></div>
                    <div className="twitter"><i className="fa-brands fa-square-twitter"></i></div>
                    <div className="instagram"><i className="fa-brands fa-instagram"></i></div>
                </div>
                <div className="copyrights">
                    <span>DIGITAL WATCH AND DIGITAL WATCH EXPERIENCE ARE TRADEMARKS FOR DIGIAL WATCH CORPORATIONS</span>
                    <span> <br /> </span>
                    <span> <br /> </span>
                    <span>NEVER GONNA GIVE YOU UP</span>
                </div>
            </footer>
        </div>
    )
}