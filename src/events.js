import React from 'react';
import './events.css';
import Nav from './navbar';
import Footer from './footer';

const Events = () => {
    return (
        <div classNameName="events">
            <Nav />
            <div className="marquee">
                <div className="marquee-content">

                    <div className="marquee-item">
                        <img src={require("./Images/image1.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image2.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image3.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image4.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image5.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image6.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image1.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image2.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image3.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image4.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image5.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image6.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image1.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image2.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image3.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image4.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image5.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("./Images/image6.jpg")} alt="" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Events;