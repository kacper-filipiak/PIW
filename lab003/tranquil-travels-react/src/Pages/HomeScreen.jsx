import React from "react";
import '../App.css';
// odczytujemy dane z pliku z danymi
import hotelsData from '../Utils/HotelsData.jsx';
import HotelCard from '../Commons/HotelCard.jsx';
import ArrowIcon from '../Assets/Arrow.svg';

const HomeScreen = () => {
    const hotelsDataHTML = hotelsData
        .map(it => <HotelCard hotel={it} />);
    return (
        <main>
            <section id="hero" className="grid hero-section">
                    <article className="hero-details">
                        <p className="title-large">Your tranquillity oasis awaits</p>
                        <p className="text-middle">TranquilTravels is designed to help you find a serene retreat for your next holidays. With us searching for the hotels nestled amidst picturesque landscapes is easier than ever. </p>
                        <div className="hero-cards">
                            <div className="card-image">
                                <p className="chip">New hotels <img src={ArrowIcon} alt="" /></p>
                            </div>
                            <div className="card-image">
                                <p className="chip">Best reviews <img src={ArrowIcon} alt="" /></p>
                            </div>
                        </div>
                    </article>
                    <div className="hero-image-container"></div>
                </section>
                <section id="browse" className="browse-section">
                    <p className="title-middle">Explore the hotels</p>
                    <input className="searchbar" placeholder="Search by hotel name, place etc." />
                    <section className="grid hotel-cards">
                      {hotelsDataHTML}
                    </section>
                    <button className="button secondary" onClick="navigate_to_browse_hotels()">Find more <img src={ArrowIcon} alt="" /></button>
                </section>
                <section id="rent" className="footer grid">
                    <div className="card-image"></div>
                    <article className="footer-details">
                        <p className="title-large">Rent with us!</p>
                        <p className="text-middle">If you’re a hotel or an apartament owner who’s looking to reach more customers you can now rent your property with TranquilTravels. </p>
                        <button className="button secondary">Learn more <img src={ArrowIcon} /></button>
                    </article>
                </section>
        </main>
    )

}

export default HomeScreen;
