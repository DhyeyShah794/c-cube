import React from 'react';
import './events.css';
import Nav from './navbar';
import Footer from './footer';

const Events = () => {
    return (
        <div className="events">
            <Nav />
            <h1 className="etitle">Events</h1>
            <Footer />
        </div>
    );
}

export default Events;