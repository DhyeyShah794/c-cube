import React from 'react';
import NavigationBar from '../../Components/Navbar/navbar';
import Home from '../Home/home';
import About from '../About/about';
import Donate from '../Donate/donate';
import Contact from '../Contact/contact';
import Events from '../Events/events';
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                <Route exact path = "/" element = {<Home />} />
                <Route exact path = "/about" element = {<About />} />
                <Route exact path = "/donate" element = {<Donate />} />
                <Route exact path = "events" element = {<Events />} />
                <Route exact path = "/contact" element = {<Contact />} />
                <Route exact path = "*" element = {<NavigationBar />} />
                </Routes>
                
                {/* <Navigate from = "*" replace = {true} /> */}
                
            </div>
        </Router>
    );
}

export default App;