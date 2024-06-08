import React from "react";
import { createContext,useReducer,useEffect } from 'react';

export const initState = {
    liked_hotels: []
}


export const reducer = (state, action) => {
  const {type, payload} = action;

  console.log("Reducer: ", state, action);
  switch(type){
      case "SET_STATE":
          state = {...state, liked_hotels : [...payload.liked_hotels]}
          break;
      case "like":
        state = {...state, liked_hotels: [...state.liked_hotels, payload.hotel.hotel]};
          break;
      case "unlike":
          state = {...state, liked_hotels: state.liked_hotels.filter((it) => it.id !== payload.hotel.hotel.id)};
          break;
      default:
          console.error(`Incorrect action type ${type}`)
  }
  console.log("After state ", state);
  return state;
}

const LikedContext = createContext();

export const LikedProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  console.log(state);
  useEffect(() => {
    const storedList = localStorage.getItem('liked');
    if (storedList) {
      dispatch({ type: 'SET_STATE', payload: JSON.parse(storedList) });  // Restore state from localStorage
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('liked', JSON.stringify(state));
  }, [state]);

  return (
    <LikedContext.Provider value={{state, dispatch}}>
      {children}
    </LikedContext.Provider>
  );
};

export default LikedContext;
