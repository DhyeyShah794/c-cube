import React from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './contact.css';


const Contact = () => {
    return (
        <div className="contact">
            <Nav />

            <h1>Contact Us</h1>

            <div className="form-data">
            <table className="contact-form">
            <tbody>
                <tr>
                    <td className="asked-info">
                        Full Name:
                    </td>
                    <td>
                        <input className="contact-us-text response" id="fullname" type="text" placeholder="Enter your full name" required />
                    </td>
                </tr>

                <tr>
                    <td className="asked-info">
                        Contact Number:
                    </td>
                    <td>
                        <input id ="conno" type="tel" className="input-box response" placeholder="0123456789" required/>
                    </td>
                </tr>
                
                <tr>
                  <td className="asked-info">Date of Birth:</td>
                  <td><input id ="dob" type="date" className="input-box response" placeholder="DD/MM/YYYY" required/></td>
                </tr>

                <tr>
                    <td className="asked-info">
                        Address:
                    </td>
                    <td>
                        <input className="contact-us-text response" id="addr" type="text" placeholder="Flat no, Apartment Name,
                        Landmark, Area, City, Pincode ." required />
                    </td>
                </tr>

                <tr>
                    <td className="asked-info">
                        Why do you wish to volunteer here?
                    </td>
                    <td>
                        <input id="volinfo" type="text" className="input-box response" placeholder="State your reason to volunteer here" required/>
                    </td>
                </tr>

                <tr>
                  <td className="asked-info">Have you volunteered at any other Foundation or NGO?</td>
                  <td>
                    <select className="response" id="prevvol">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    </select></td>
                </tr>

            </tbody>
            </table>
                <div>
                    <button id="sendbtn">Send</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;