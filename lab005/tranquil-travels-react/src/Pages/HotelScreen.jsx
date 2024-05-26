import React from "react";
import { useEffect, useState } from 'react';
import EditIcon from '../Assets/edit.png'
import DeleteIcon from '../Assets/delete.png'
import { useParams } from "react-router-dom";
import { readHotel } from "../Utils/hotelService.js";

const HotelScreen = () => {
    const {id} = useParams();
  if (!id) {
    console.log("No id passed in navigation");
  }

   const [hotel, setHotel] = useState(null);

      useEffect(()=>{

        readHotel(id).then(doc => setHotel(doc))

      },[]);

    const hotelName = hotel?.name;
    const hotelLocation = hotel?.location;
    const hotelDescription = hotel?.description;
    const hotelRaiting = '★'.repeat(Number(hotel?.rating));
    const hotelPrice = hotel?.price;
    const imageStyle = { backgroundImage: `url(${hotel?.image})` };
    const hotelDetailImagesHTML = hotel?.detailImages
      ?.map(it => <div className="card-image" style={{ backgroundImage: `url(${it})` }} />);


  return (
    <main>
        <section id="hero" className="hotel-section">
            <p className="title-large title-section">{hotelName}</p>
            <div id="hotel" className="grid hero-section">
            <div className="hotel-image-container" style={imageStyle}></div>
            <article className="hotel-details">
                <ul className="hotel-info">
                    <li className="elem"><h4>Location:</h4><p>{hotelLocation}</p></li>
                    <li className="elem"><h4>Local category:</h4><p>{hotelRaiting}</p></li>
                    <li className="elem"><h4>Price:</h4><p>{hotelPrice}€/room/night</p></li>
                    <li className="long-elem"><h4>Description:</h4><p>{hotelDescription}</p></li>
                </ul>
                <div className="action_buttons">
                        <p className="hotel-action-button chip">Edit <img className="icon" src={EditIcon} alt="Edit" /></p>
                        <p className="chip hotel-action-button">Remove <img className="icon" src={DeleteIcon} alt="Delete" /></p>
                </div>
                <div className="hero-cards">
                    {hotelDetailImagesHTML}
                </div>
            </article>
        </div>
        </section>

    </main>
  );
}

export default HotelScreen;
