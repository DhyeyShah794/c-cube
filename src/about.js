import React from 'react';
import './about.css';
import Nav from './navbar';
import Footer from './footer';


const About = () => {
    return (
        <div className="about">
            <Nav />
            <h2>Mr. Vishal Kaushal</h2>
            <p className="info1">1. Recipient of Institute Silver Medal from IIT Kharagpur. <br></br>
                    2. Worked as Project Leader at Oracle Bangalore for 6 years.<br></br>
                    3. Currently pursuing PhD from IIT Bombay. <br></br>
                    4. IIT KGP Topper in Computer Science Engineering Department. <br></br>
                    5. District Topper in CBSE in 12th.<br></br>
                    6. Adjudged Second Best Student in the Institute across all branches and departments based on merit.<br></br>
                    7. Won J.C.Ghosh Memorial Prize for being topper</p><br></br>
            <h1> GOALS </h1>
            <p className="info2"> 1. Training in soft skills.<br></br>
                2. Bringing out the potential in the individual.<br></br>
                3. Blending Character with Competence in bringing
                about long-enduring success.<br></br>
                4. Balancing Personal vs Professional life and Work Vs.
                Entertainment. <br></br>
                5. Saving youth from self-destructive habits and
                addictions that harm body and mind. <br></br>
                6. Dealing with sensitivity and self awareness, in
                thought, word and action.<br></br>
                7. Webinars with international faculty for
                broadening perspectives.<br></br>
                8. Organizing outings for experiencing closer touch with
                nature and marvelous gifts of Supreme Divinity. <br></br></p>
            <Footer />
        </div>
    );
};

export default About;