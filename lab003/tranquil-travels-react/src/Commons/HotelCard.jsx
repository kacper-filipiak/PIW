import React from "react";

const HotelCard = ({hotel, on_image, action_button}) => {

    const hotelName = hotel.name;
    const hotelLocation = hotel.location;
    const hotelDescription = hotel.description;
    const hotelRaiting = '★'.repeat(Number(hotel.rating));
    const hotelPrice = hotel.price;
    const imageStyle = { backgroundImage: `url(${hotel.image})` };

    return (
        <article className="hotel-card">
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