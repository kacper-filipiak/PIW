import logo from './Assets/logo.svg';
import './App.css';
import React from "react";
import { useState } from 'react';
import HomeScreen from './Pages/HomeScreen.jsx';
import BrowseHotelsScreen from './Pages/BrowseHotelsScreen.jsx';
import HotelScreen from './Pages/HotelScreen.jsx';
import LikedScreen from './Pages/LikedScreen.jsx';
import hotelsData from './Utils/HotelsData.jsx';
import { 
    BrowserRouter as Router, Route, Link, Routes, Outlet,  createBrowserRouter, createRoutesFromElements, RouterProvider
} from "react-router-dom";
import { useUser, logout } from "./Utils/firebase.utils.js";
import Login from './Pages/Login.jsx';
import {LikedProvider} from "./context/likedContext.js";


function AppLayout() {
    const [liked_hotels, setLikedHotels] = useState([]);
    const user = useUser();
  return (
              <div className="App">
    <div>
      <LikedProvider>
      <header>
         <nav className="fixed-navigation">
            <img className="logo" src={logo} alt=""/>
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/browse">Browse</Link></li>
                <li><Link className="nav-link" to="/liked">Liked places</Link></li>
                <li><Link className="nav-link" to="/signup">Sign up</Link></li>
                <button className="button primary">{!!!user?<Link className="nav-link" to="/Login">Log in</Link>:<Link className="nav-link" onClick={logout}>
          Logout {user?.displayName}
        </Link>}</button>
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
      </header>
      <div className='main-nav-container'>

      <Outlet context={[liked_hotels, setLikedHotels]}/>
      </div>
      </LikedProvider>
    </div>
      </div>
  );
}
/*const router = createBrowserRouter(
  createRoutesFromElements(
          <Route path="/" element={<AppLayout /> } >
          <Route path="" element={<HomeScreen /> } />
          <Route path="rent/:id" element={<HotelScreen />} />
          <Route path="browse" element={<BrowseHotelsScreen />} />
          <Route path="login" element={<Login /> } />
          <Route path="liked" element={<LikedScreen /> } />
      </Route>
  )
)
*/
//const App = () => <RouterProvider router={router} />

function App() {
  
    return (
      <Router>
      <Routes>
          <Route path="/" element={<AppLayout /> } >
          <Route path="" element={<HomeScreen /> } />
          <Route path="rent/:id" element={<HotelScreen />} />
          <Route path="browse" element={<BrowseHotelsScreen />} />
          <Route path="login" element={<Login /> } />
          <Route path="liked" element={<LikedScreen /> } />
        </Route>
        </Routes>
      </Router>
    );
}

export default App;
