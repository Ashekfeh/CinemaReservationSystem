import React from "react";
import './TheaterTimes.css';

export default function TheaterTimes() {
    return (
        <div id="available-theaters" className="available-theaters">

                        <div>
                            <h2 className="theater-name">Aqua Florya AVM</h2>
                            <div className="class-wrapper"><div className="class">
                                Gold Class
                                <div className="time-wrapper">
                                    <button className="time">22:00</button>
                                    <button className="time">00:00</button>
                                    <button className="time">15:00</button>
                                    <button className="time">19:00</button>
                                </div>
                            </div>
                                <div className="class">Regular<div className="time-wrapper">
                                    <button className="time">17:00</button>
                                    <button className="time">20:00</button>
                                    <button className="time">13:00</button>
                                    <button className="time">23:30</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className="theater-name">Zorlu Center AVM</h2>
                            <div className="class-wrapper">
                                <div className="class">IMAX<div className="time-wrapper">
                                    <button className="time">21:30</button>
                                    <button className="time">23:00</button>
                                    <button className="time">02:00</button>
                                </div>
                                </div>
                                <div className="class">Gold Class<div className="time-wrapper">
                                    <button className="time">22:00</button>
                                    <button className="time">00:00</button>
                                    <button className="time">15:00</button>
                                    <button className="time">19:00</button>
                                </div>
                                </div>
                                <div className="class">Regular<div className="time-wrapper">
                                    <button className="time">17:00</button>
                                    <button className="time">20:00</button>
                                    <button className="time">13:00</button>
                                    <button className="time">23:30</button>
                                </div>
                                </div>
                            </div></div>
                        <div>
                            <h2 className="theater-name">Marmara Park AVM</h2>
                            <div className="class-wrapper">
                                <div className="class">IMAX<div className="time-wrapper">
                                    <button className="time">21:30</button>
                                    <button className="time">23:00</button>
                                    <button className="time">02:00</button>
                                </div>
                                </div>
                                <div className="class">Gold Class<div className="time-wrapper">
                                    <button className="time">22:00</button>
                                    <button className="time">00:00</button>
                                    <button className="time">15:00</button>
                                    <button className="time">19:00</button>
                                </div>
                                </div>
                                <div className="class">Regular<div className="time-wrapper">
                                    <button className="time">17:00</button>
                                    <button className="time">20:00</button>
                                    <button className="time">13:00</button>
                                    <button className="time">23:30</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}