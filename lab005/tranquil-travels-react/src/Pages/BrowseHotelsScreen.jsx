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

const BrowseHotelsScreen = () => {
    const navigate = useNavigate();
    const [hotels, setHotels] = useState([]);
    const hotelsDataHTML = hotels
        .map(it => <HotelCard hotel={it} on_image={<HeartButton />} action_button={<HotelCardActionButton onClick={() => {navigate('/rent/' + it.id);}} />} />);

      useEffect(()=>{

        readHotels().then(docs => setHotels(docs))

      });
    return (
        <main>
            <section className="title-section">
                <p className="title-large">Welcome your tranquility oasis awaits</p>
            </section>
            <section id="browse" className="browse-section">
                <p className="title-middle">Explore the hotels</p>
                <input className="searchbar" placeholder="Search by hotel name, place etc." />
                <section className="grid hotel-cards">
                  {hotelsDataHTML}
                </section>
            </section>
         </main>
    )

}

export default BrowseHotelsScreen;
