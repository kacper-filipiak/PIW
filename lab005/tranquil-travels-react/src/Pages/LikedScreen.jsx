import React from "react";
import { useEffect, useState } from 'react';
import '../App.css';
// odczytujemy dane z pliku z danymi
import { readHotels } from '../Utils/hotelService.js';
import HotelCard from '../Commons/HotelCard.jsx';
import ArrowIcon from '../Assets/Arrow.svg';
import HotelCardActionButton from '../Commons/HotelCardActionButton.jsx'
import HeartButton from '../Commons/HartButton.jsx'
import { useNavigate } from "react-router-dom";

import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import LikedContext from "../context/likedContext.js";

const LikedScreen = () => {
    const navigate = useNavigate();
    const {state, dispatch} = useContext(LikedContext);
    console.log("Like state: ", state);
    console.log("state.liked_hotels ", state.liked_hotels);
    const hotelsDataHTML = state.liked_hotels
        .map(it => <HotelCard hotel={it} onClick={()=>{
            console.log("Dislike");
            dispatch({type:"unlike", hotel:it});
            console.log("Dislike");
        }} on_image={<HeartButton hotel={it}/>}  action_button={<HotelCardActionButton onClick={() => {navigate('/rent/' + it.id);}} />} />);

    return (
        <main>
            <section className="title-section">
                <p className="title-large">Welcome your tranquility oasis awaits</p>
            </section>
            <button onClick={()=>{localStorage.clear()}}> Clear local storage </button>
            <section id="browse" className="browse-section">
                <p className="title-middle">Your's beloved hotels</p>
                <section className="grid hotel-cards">
                  {hotelsDataHTML}
                </section>
            </section>
         </main>
    )

}

export default LikedScreen;
