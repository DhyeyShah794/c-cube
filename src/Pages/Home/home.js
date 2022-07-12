import React from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './home.css';


const Home = () => {
    return (
        <div className="home">
        <Nav />
        <div className="landing-page-content">
            <div className="title">
                <h2 className="heading"><strong>C-Cube</strong></h2>
                <h3 className="tagline">"Holistic development of youth lies in their<br></br>intellectual,
                    mental and spiritual growth."</h3>
            </div>

            <div className="box">
                <h3 className="found-info">What is this foundation about?</h3>
                    <div className="filled"></div>
            </div>
            <pre className="text-info">
            In this modern age of technology, every student should have academic skills as well as a good character. Thus, C-CUBE gives a chance to students to develop these qualities through many workshops. As COVID -19 pandemic is going on, there was a lockdown in the country. Colleges were closed from last two years. Everything was going on in online mode.
            <br></br>
            <br></br>
            So, to engage students properly so that they can acquire the right skills for their bright future, C-CUBE has arranged many workshops to give Software Training. As pandemic lockdown was going on, many students were feeling lonely and distressed. We found out that there is damn for developing inner personality of a person. So, we conducted many Personality Development workshops for students.
            </pre>
        </div>
        <Footer />
    </div>
    );
}

export default Home;