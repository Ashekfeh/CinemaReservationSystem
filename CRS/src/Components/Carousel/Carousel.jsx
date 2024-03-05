import React, { useEffect, useState } from "react";
import './Carousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css/bundle';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";


const movieList_url = 'http://127.0.0.1:8000/movies';



export default function Carousel() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(movieList_url);
            result.json().then(json => {
                setData(json);
            })
        }
        fetchData()
    }, [])

    return (
        <div className="wrapper">
            <Swiper
                modules={[Pagination]}
                spaceBetween={1}
                slidesPerView={4}
                pagination={{ clickable: true }}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="card">
                                <img src={item.cover} className="poster" />
                                <div className="card-body">
                                    <p className="release-date roboto">{item.release_year}</p>
                                    <h1 className="movie-title roboto">{item.title}</h1>
                                    <p>- - - -</p>
                                    <Link to={`${item.in_theater? `/movie/${item.id}`:'/'}`} className={`${item.in_theater?"watch-now ":"coming-soon "}roboto btn`} data-id="1">{`${item.in_theater? "WATCH NOW":"COMING SOON"}`}</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}