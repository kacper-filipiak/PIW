import logo from './Assets/logo.svg';
import './App.css';
import React from "react";
import HomeScreen from './Pages/HomeScreen.jsx';
import BrowseHotelsScreen from './Pages/BrowseHotelsScreen.jsx';
import HotelScreen from './Pages/HotelScreen.jsx';
import hotelsData from './Utils/HotelsData.jsx';
import { 
    BrowserRouter as Router, Route, Link, Routes
} from "react-router-dom";
import { useUser, logout } from "./Utils/firebase.utils.js";
import Login from './Pages/Login.jsx';

function App() {
    const user = useUser();
  return (
              <div className="App">
    <Router>
    <div>

      <header>
         <nav className="fixed-navigation">
            <img className="logo" src={logo} alt=""/>
            <ul className="nav-links">
                <li><Link className="nav-link" to="/">Home</Link></li>
                <li><Link className="nav-link" to="/browse">Browse</Link></li>
                <li><Link className="nav-link" to="/rent_with_us">Rent with us</Link></li>
                <li><Link className="nav-link" to="/signup">Sign up</Link></li>
                <button className="button primary">{!!!user?<Link className="nav-link" to="/Login">Log in</Link>:<Link className="nav-link" onClick={logout}>
          Logout {user?.displayName}
        </Link>}</button>
            </ul>
            <button className="button primary hidden">Menu</button>
        </nav>
      </header>
      <div className='main-nav-container'>

      <Routes>
          <Route path="/rent" element={<HotelScreen />} />
          <Route path="/browse" element={<BrowseHotelsScreen />} />
          <Route path="/" element={<HomeScreen /> } />
          <Route path="/login" element={<Login /> } />
        </Routes>

      </div>
    </div>
      </Router>
      </div>
  );
}

export default App;
