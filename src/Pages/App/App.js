import React from 'react';
import NavigationBar from '../../Components/Navbar/navbar';
import Home from '../Home/home';
import About from '../About/about';
import Donate from '../Donate/donate';
import Contact from '../Contact/contact';
import Events from '../Events/events';
import { Route, Routes, Outlet } from 'react-router-dom';

const Layout = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
}

const App = () => {
    return (
            <Layout>
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="donate" element={<Donate />} />
                <Route path="contact" element={<Contact />} />
                <Route path="events" element={<Events />} />
                </Routes>
            </Layout>

        
    );
}

export default App;