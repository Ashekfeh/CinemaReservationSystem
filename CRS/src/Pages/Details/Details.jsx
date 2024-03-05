import React, { useEffect, useState } from "react";
import './Details.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import TheaterTimes from "../../Components/TheaterTimes/TheaterTimes";
import Seats from "../../Components/Seats/Seats";
import { useParams } from "react-router-dom";

/* 

<h2 id="movie-title">The Shawshank Redemption</h2>
<p id="synopsis">Two imprisoned men bond over several years, finding solace and eventual redemption through acts of common decency.</p>
<div id="director"><span>director:</span> Frank Darabont</div>
                <div id="genre"><span>genre:</span> Drama</div>
                <div id="editor"><span>editor:</span> Richard Francis-Bruce</div>
                <div id="box-office"><span>box office:</span> $58.3 million</div>
                <div id="cinematography"><span>cinematography:</span> Roger Deakins</div>
*/

export default function Details() {

    const {movieId} = useParams();
    const movie_url = `http://127.0.0.1:8000/movie/${movieId}`

    const [data, setData] = useState([])

    const [date, setDate] = useState([])
    useEffect(() => {
        const getDates = () => {
            var date = new Date()
            var dateList = []
            var specDate = 15
            while (date.getDate() !== specDate) {
                const day = new Date(date);
                dateList.push(day)
                date.setDate(date.getDate() + 1)
            }
            setDate(dateList)
        }
        getDates()
    }, [])

    useEffect(() => {
        const fetchMovieData = async () => {
            const result = await fetch(movie_url)
            result.json().then((json => setData(json)))
        }
        fetchMovieData()
    }, [movieId])
    return (
        <>
            <div className="wrapper-md">
                <div className="banner crt">
                    <img className="md-img" src={data.cover} alt="" />
                    <div className="md-description">
                        <h3>NOW PLAYING</h3>
                        <h2>{data.title}</h2>
                        <p>{`R | 180 min | ${data.director} | ${data.release_year}`}</p>
                    </div>
                </div>
                <div className="date-slider">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={1}
                        slidesPerView={4}
                    >
                        {date.map((item, index) => {
                            const today = new Date()
                            return (
                                <SwiperSlide key={index}>
                                    <div className="date">
                                        <h3>{item.getDate() == today.getDate() && item.getMonth() == today.getMonth() ? "Today" : `${item.toLocaleString('default', { month: 'long' })} ${item.getDate()}`}</h3>
                                    </div></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div id="theaters-wrapper" className="wrapper" style={{ display: "block" }}>
                    <h1 className="select-theater">SELECT THEATER</h1>
                    <TheaterTimes />
                    <div className="wrapper">
                        <Seats />
                    </div>
                </div>
            </div>

        </>
    )
}