import React, { useEffect, useState } from "react";
import './InTheater.css';
import { Link } from "react-router-dom";

const inTheater_url = 'http://127.0.0.1:8000/in_theater'

export default function InTheater() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(inTheater_url)
            result.json().then((json => setData(json)));
        }
        fetchData()
    }, [])

    return (
        <>
        {data.map((item, index) => {
            return (
                <div className="it-card" key={index}>
                    <img src={item.cover} />
                    <div className="it-card-body">
                        <h3>{item.title}</h3>
                        <p className="synopsis">{item.synopsis}</p>
                        <Link to={`movie/${item.id}`} className="it-watch-now btn" data-id="1">watch now</Link>
                    </div>
                </div>
            )
        })}
        </>
    )
}