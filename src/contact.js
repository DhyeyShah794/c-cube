import React from 'react';
import './contact.css';
import Nav from './navbar';
import Footer from './footer';

const Contact = () => {
    return (
        <div className="contact">
            <Nav />
            <h1 className="ctitle">Contact</h1>
            <Footer />
        </div>
    );
}

export default Contact;