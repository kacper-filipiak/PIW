import React from "react";
import ArrowIcon from '../Assets/Arrow.svg';

const HotelCardActionButton = ({onClick}) => {
  return (
                <button className="hotel-action-button" onClick={onClick}> 
                    <p> View offer </p>
                    <img className="icon" src={ArrowIcon} alt="" />
                </button>
  );
}

export default HotelCardActionButton;
