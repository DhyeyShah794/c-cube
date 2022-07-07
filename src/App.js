import React from 'react';
import Nav from './navbar';
import Home from './home';
import About from './about';
import Donate from './donate';
import Contact from './contact';
import Events from './events';
import Login from './login';
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
                <Route exact path = "/login" element = {<Login />} />
                <Route exact path = "*" element = {<Nav />} />
                </Routes>
                
                {/* <Navigate from = "*" replace = {true} /> */}
                
            </div>
        </Router>
    );
}

export default App;