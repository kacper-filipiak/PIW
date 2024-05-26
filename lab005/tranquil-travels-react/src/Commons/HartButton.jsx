import React from "react";
import HeartIcon from '../Assets/heart.png'
const HeartButton = () => {
  return (
    <div className="action_icon">
        <img className="icon-image" src={HeartIcon} alt="Like icon" />
    </div>
  );
}
export default HeartButton;
