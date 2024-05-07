import React from "react";
import ArrowIcon from '../Assets/Arrow.svg';

const HotelCardActionButton = () => {
  return (
                <button className="hotel-action-button" onClick="navigate_from_page_to_hotel_page()"> 
                    <p> View offer </p>
                    <img className="icon" src={ArrowIcon} alt="" />
                </button>
  );
}

export default HotelCardActionButton;
