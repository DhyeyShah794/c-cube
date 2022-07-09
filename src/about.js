import React from 'react';
import './about.css';
import Nav from './navbar';
import Footer from './footer';


const About = () => {
    return (
        <div className="about">
            <Nav />
            <h1 className="atitle">C-CUBE :- CHARACTER CULTURE COMPETENCE </h1>
            <p className="info">The main motto of this club is to train today's youths to become great leaders in the future Intellectual education influences the head and value-based education influences the heart. In fact, education that does not train the heart can be dangerous. If we want to build character in our offices, homes and society, we must have the wisdom to live a principle-centered life based on honesty, compassion, courage, responsibility etc. Educated persons are those who can choose wisely and courageously under any circumstances between good and bad, between virtuousness and vulgarities regardless of the academic degrees they have. The goal of C-Cube is to rekindle the innate wisdom about meaning and purpose of life</p>
            
            <h2> GOALS </h2>

            <p className="info"> 1. Training in soft skills.<br />
                2. Bringing out the potential in the individual.<br />
                3. Blending Character with Competence in bringing
                about long-enduring success.<br />
                4. Balancing Personal vs Professional life and Work Vs.
                Entertainment. <br />
                5. Saving youth from self-destructive habits and
                addictions that harm body and mind. <br />
                6. Dealing with sensitivity and self awareness, in
                thought, word and action.<br />
                7. Webinars with international faculty for
                broadening perspectives.<br />
                8. Organizing outings for experiencing closer touch with
                nature and marvelous gifts of Supreme Divinity. <br /></p>
            
            <h2>Mr. Vishal Kaushal</h2>

            <p className="info">1. Recipient of Institute Silver Medal from IIT Kharagpur. <br />
                    2. Worked as Project Leader at Oracle Bangalore for 6 years.<br />
                    3. Currently pursuing PhD from IIT Bombay. <br />
                    4. IIT KGP Topper in Computer Science Engineering Department. <br />
                    5. District Topper in CBSE in 12th.<br />
                    6. Adjudged Second Best Student in the Institute across all branches and departments based on merit.<br />
                    7. Won J.C.Ghosh Memorial Prize for being topper</p><br />

            
                
            <Footer />
        </div>
    );
};

export default About;