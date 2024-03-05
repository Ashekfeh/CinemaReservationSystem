import React, { useEffect, useState } from "react";
import './Seats.css';

export default function Seats() {
    const [seats, setSeats] = useState([]);

    useEffect(() => {
        const seats = 6;
        const seatList = []
        for (var i = 0; i < seats; i++) {
            seatList.push(6);
        }
        setSeats(seatList);
    }, [])
    return (
        <div className="table-row">
            <table>
                <tbody >
                    {
                        seats.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="seat">
                                            <div className="left">
                                            </div>
                                            <div className="right">
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}