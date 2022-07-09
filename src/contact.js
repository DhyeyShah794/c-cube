import React from 'react';
import './contact.css';
import Nav from './navbar';
import Footer from './footer';

const Contact = () => {
    return (
        <div className="contact">
            <Nav />

            <h1>Contact Us</h1>

            <div class="form-data">
            <table class="contact-form">
            <tbody>
                <tr>
                    <td class="asked-info">
                        Full Name:
                    </td>
                    <td>
                        <input class="contact-us-text response" id="fullname" type="text" placeholder="Enter your full name"
                        required />
                    </td>
                </tr>

                <tr>
                    <td class="asked-info">
                        Contact Number:
                    </td>
                    <td>
                        <input id ="conno" type="tel" class="input-box response" placeholder="0123456789"/>
                    </td>
                </tr>
                
                <tr>
                  <td class="asked-info">Date of Birth:</td>
                  <td><input id ="dob" type="date" class="input-box response" placeholder="DD/MM/YYYY" /></td>
                </tr>

                <tr>
                    <td class="asked-info">
                        Address:
                    </td>
                    <td>
                        <input class="contact-us-text response" id="addr" type="text" placeholder="Flat no, Apartment Name,
                        Landmark, Area, City, Pincode ." required />
                    </td>
                </tr>

                <tr>
                    <td class="asked-info">
                        Why do you wish to volunteer here?
                    </td>
                    <td>
                        <input id="volinfo" type="text" class="input-box response" placeholder="State your reason to volunteer here" />
                    </td>
                </tr>

                <tr>
                  <td class="asked-info">Have you volunteered at any other Foundation or NGO?</td>
                  <td>
                    <select class="response" id="prevvol">
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