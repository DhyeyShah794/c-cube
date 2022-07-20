import React from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './about.css';


const About = () => {
    return (
        <div className="about">
            <Nav />
            <div className="a-title">
                <h1><strong>C-Cube</strong></h1>
                <div className="box-2">
                    <h2>Culture | Character | Competence</h2>
                    <div className="filled-2"></div>
                </div>
            </div>
            <p className="info">The main motto of this club is to train today's youths to become great leaders in the future Intellectual education influences the head and value-based education influences the heart. In fact, education that does not train the heart can be dangerous. If we want to build character in our offices, homes and society, we must have the wisdom to live a principle-centered life based on honesty, compassion, courage, responsibility etc.
                <br /><br />
                Educated persons are those who can choose wisely and courageously under any circumstances between good and bad, between virtuousness and vulgarities regardless of the academic degrees they have. The goal of C-Cube is to rekindle the innate wisdom about meaning and purpose of life</p>

            <div className="box-3">
                <h2 style={{ marginTop: "7rem" }}> Our Goals </h2>
                <div className="filled-3"></div>
            </div>

            <p className="info">
                <ol>
                    <li>Training in soft skills</li>
                    <li>Bringing out the potential in the individual</li>
                    <li>Blending Character with Competence in bringing about long-enduring success</li>
                    <li>Balancing Personal vs Professional life and Work Vs. Entertainment</li>
                    <li>Saving youth from self-destructive habits and addictions that harm body and mind</li>
                    <li>Dealing with sensitivity and self awareness, in thought, word and action</li>
                    <li>Webinars with international faculty for broadening perspectives</li>
                    <li>Organizing outings for experiencing closer touch with nature and marvelous gifts of Supreme Divinity</li>
                </ol>
            </p>

            <div className="box-4">
                <h2 style={{ color: "#3457D5" }}>Chairperson - Mr. Vishal Kaushal</h2>
                <div className="filled-4"></div>
                <img src={require("../../Components/Images/chairman.png")} alt="Vishal Kaushal" className="chairman-img" />
            </div>

            <p className="info">
                <ul>
                    <li>Recipient of Institute Silver Medal from IIT Kharagpur</li>
                    <li>Worked as Project Leader at Oracle Bangalore for 6 years</li>
                    <li>Currently pursuing PhD from IIT Bombay</li>
                    <li>IIT KGP Topper in Computer Science Engineering Department</li>
                    <li>District Topper in CBSE in 12th</li>
                    <li>Adjudged Second Best Student in the Institute across all branches and departments based on merit</li>
                    <li>Won J.C.Ghosh Memorial Prize for being topper</li>
                </ul>
            </p>



            <Footer />
        </div>
    );
};

export default About;