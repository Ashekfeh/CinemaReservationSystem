import React from "react";
import './Home.css';
import Carousel from "../../Components/Carousel/Carousel";
import InTheater from "../../Components/InTheater/InTheater";

export default function Home() {
    return (
        <div>
            <Carousel />
            <div className="wrapper">
                <div className="in-theaters">
                    <h1>IN THEATERS</h1>
                </div>
                    <div className="it">
                        <InTheater />
                    </div>
            </div>
        </div>
    )
}