import React from "react";
import HeartIcon from '../Assets/heart.png'
import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import LikedContext from "../context/likedContext.js";

const HeartButton = (hotel) => {
  const {state, dispatch} = useContext(LikedContext);
  console.log("Hearth state ", state);
  console.log("Hearth hotel ", hotel);
  const isLiked = state.liked_hotels.some((it)=> it.id === hotel.hotel.id);
  const heart_color = isLiked? "#C4E641" : "white";
  return (
    <div onClick={()=>{
        const type = isLiked ? "unlike" : "like";
        console.log(type);
        dispatch({type: type, payload:{ hotel:hotel}});
    }} className="action_icon" style={{'background-color':heart_color}}>
        <img className="icon-image" src={HeartIcon} alt="Like icon" />
    </div>
  );
}
export default HeartButton;
