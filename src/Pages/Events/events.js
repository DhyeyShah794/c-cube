import React from "react";
import Nav from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import Posts from "../../Components/Posts/Posts";
import "./events.css";

const Events = () => {
  return (
    <div classNameName="events">
      <Nav />
      <div className="events-intro">
        <h3 className="events-heading"><strong>Events</strong></h3>
        <p className="events-intro-info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
        </p>
      </div>
      <Posts />
      <Footer />
    </div>
  );
};

export default Events;
