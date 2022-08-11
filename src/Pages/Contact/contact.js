import {React, useState} from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import { db } from '../../firebase.js';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// import { isPossiblePhoneNumber } from 'react-phone-number-input';
import './contact.css';

const Contact = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [reason, setReason] = useState("");
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('contacts').add({
            name: name,
            phone: phone,
            email: email,
            date: date,
            address: address,
            reason: reason,
        })
        .then(() => {
            alert("Form submitted");
            setLoader(false);
        })
        .catch(error => {
            alert(error.message);
            setLoader(false);
        })

        setName('');
        setPhone('');
        setEmail('');
        setDate('');
        setAddress('');
        setReason('');
    };

    return (
        <div className="contact">
            <Nav />
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Contact Us</h1>

                    <label>Name</label>
                    <input className="response" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>

                    <label>Phone number</label>
                    <PhoneInput placeholder="Phone number" limitMaxLength={true} defaultCountry="IN" value={phone} onChange={setPhone}/>

                    <label>Email</label>
                    <input className="response" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                    <label>Date of birth</label>
                    <input className="response" placeholder="" type="date" value={date} onChange={(e) => setDate(e.target.value)} required/>

                    <label>Address</label>
                    <textarea className="response" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>

                    <label>Why do you wish to volunteer here?</label>
                    <textarea className="response" placeholder="Reason for volunteering" value={reason} onChange={(e) => setReason(e.target.value)} required></textarea>

                    <button type="submit" className="send-btn" style={{background : loader ? "rgba(10, 10, 10, 0.5)" : "rgba(0, 0, 0, 0)"}}>Submit</button>

                </form>
                <div className="map-container">
                    <h2>Find us at</h2>
                    <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.401816382714!2d72.86889221446135!3d19.04606305786317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf21727f6e19%3A0x473006136ad440dc!2sK.%20J.%20Somaiya%20Institute%20of%20Engineering%20and%20Information%20Technology!5e0!3m2!1sen!2sin!4v1660149227899!5m2!1sen!2sin" />
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contact;
