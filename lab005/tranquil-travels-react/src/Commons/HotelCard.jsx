import React from "react";
import { useNavigate } from "react-router-dom";

const HotelCard = ({hotel, on_image, action_button}) => {

    const navigate = useNavigate();
    const navigateToHotel = (hotel) => {
        navigate('/rent/' + hotel.id);
    }
    const hotel_id = hotel.id;
    const hotelName = hotel.name;
    const hotelLocation = hotel.location;
    const hotelDescription = hotel.description;
    const hotelRaiting = '★'.repeat(Number(hotel.rating));
    const hotelPrice = hotel.price;
    const imageStyle = { backgroundImage: `url(${hotel.image})` };

    return (
        <article className="hotel-card" onClick={() => navigateToHotel(hotel)}>
            <div className="card-image" style={imageStyle}>
                <div className="image-decor">
                        <p className="chip">{hotelLocation}</p>
                        {on_image}
                    </div>            </div>
            <p className="text-middle">{hotelName}</p>
            <p className="text-small">{hotelDescription}</p>
            <div className="hotel-card-footer">
                <p className="text-middle">{hotelRaiting}</p>
                <p className="text-middle">{hotelPrice}€/room</p>
            </div>
            {action_button}
        </article>
    );
 
}

export default HotelCard;
