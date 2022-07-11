import {React, useState} from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// import { isPossiblePhoneNumber } from 'react-phone-number-input';
import './contact.css';

let phoneNumber = '';

const Contact = () => {
    const [value, setValue] = useState()
    const [message, setMessage] = useState('')

    const handleChange = event => {
        setMessage(event.target.value);
        console.log(value);
    };

    const handleClick = event => {
        event.preventDefault();
        console.log(message);
    };
    return (
        <div className="contact">
            <Nav />

            <h1>Contact Us</h1>

            <div className="form-container">
                <table className="contact-table">
                    <tbody>
                        <tr>
                            <td className="asked-info">
                                Full Name:
                            </td>
                            <td>
                                <input onChange={handleChange} className="response" id="full-name" type="text" placeholder="Enter your full name" required />
                            </td>
                        </tr>

                        <tr>
                            <td className="asked-info">
                                Contact Number:
                            </td>
                            <td>
                                <PhoneInput placeholder="Enter phone number" limitMaxLength={true} defaultCountry="IN" value={value} onChange={setValue} />
                            </td>
                        </tr>
                        <tr>
                            <td className="asked-info">
                                Email Address:
                            </td>
                            <td>
                                <input onChange={handleChange} className="response" id="email" type="text" placeholder="Enter your email address" required />
                            </td>
                        </tr>

                        <tr>
                            <td className="asked-info">Date of Birth:</td>
                            <td><input onChange={handleChange} className="response" id="dob" type="date" placeholder="" required /></td>
                        </tr>

                        <tr>
                            <td className="asked-info">
                                Address:
                            </td>
                            <td>
                                <input onChange={handleChange} className="response" id="address" type="text" placeholder="Flat no, Apartment Name,
                                Landmark, Area, City, Pincode ." required />
                            </td>
                        </tr>

                        <tr>
                            <td className="asked-info">
                                Why do you wish to volunteer here?
                            </td>
                            <td>
                                <input onChange={handleChange} className="response" id="vol-info" type="text" placeholder="State reason for volunteering" required />
                            </td>
                        </tr>

                        <tr>
                            <td className="asked-info">Have you volunteered at any other Foundation or NGO?</td>
                            <td>
                                <select className="response" id="prev-vol">
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select></td>
                        </tr>
                    </tbody>
                    
                </table>
                <div>
                    <button onClick={handleClick} id="send-btn">Send</button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
