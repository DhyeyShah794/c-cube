import React from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './events.css';


const Events = () => {
    return (
        <div classNameName="events">
            <Nav />
            <div className="marquee">
                <div className="marquee-content">

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image1.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image2.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image3.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image4.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image5.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image6.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image1.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image2.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image3.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image4.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image5.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image6.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image1.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image2.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image3.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image4.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image5.jpg")} alt="" />
                    </div>

                    <div className="marquee-item">
                        <img src={require("../../Components/Images/image6.jpg")} alt="" />
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Events;