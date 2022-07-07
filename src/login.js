import React from 'react';
import './login.css';
import Nav from './navbar';
import Footer from './footer';

const Login = () => {
    return (
        <div className="login">
            <Nav />
            <h1 className="ltitle">Login</h1>
            <Footer />
        </div>
    );
}

export default Login;