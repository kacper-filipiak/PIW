import React from "react";
import '../App.css';
// odczytujemy dane z pliku z danymi
import hotelsData from '../Utils/HotelsData.jsx';
import HotelCard from '../Commons/HotelCard.jsx';
import ArrowIcon from '../Assets/Arrow.svg';
import HotelCardActionButton from '../Commons/HotelCardActionButton.jsx'
import HeartButton from '../Commons/HartButton.jsx'
import { useNavigate } from "react-router-dom";

const BrowseHotelsScreen = () => {
    const navigate = useNavigate();
    const navigateToHotel = (hotel) => {
        navigate('/rent', {state: {hotel: hotel}})
    }
    const hotelsDataHTML = hotelsData
        .map(it => <HotelCard hotel={it} on_image={<HeartButton />} action_button={<HotelCardActionButton onClick={() => {navigateToHotel(it)}} />} />);
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
