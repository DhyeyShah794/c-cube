import {React, useState} from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import PhoneInput from 'react-phone-number-input'
import { db } from '../../firebase.js';
import './donate.css';


const Donate = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState();
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState('');
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);

        db.collection('donate').add({
            name: name,
            phone: phone,
            email: email,
            address: address,
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
        setAddress('');
    };
    return (
        <div className="donate">
            <Nav />
            <h2 className="d-title"><strong>Donation</strong></h2>
            <div className="donation-info">
                <p className="d-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem veniam ipsum culpa voluptates ratione
                    suscipit nesciunt eius facilis illo distinctio explicabo sapiente voluptate beatae aspernatur, ex qui
                    tempora quibusdam.
                </p>
                <p className="d-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quidem eaque voluptates excepturi in culpa ab,
                    voluptatibus corrupti earum, vel provident, officiis rerum facilis cupiditate! Id dolorum quaerat unde
                    deserunt.<br /> This will also benefit the community which we<br />
                    serve and together we can bring smile on a
                    lot of people's faces.
                </p>
            </div>

            <div class="info">
                <h2>How to Donate?</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat velit eius, esse iure, nemo animi
                        aliquid labore, quibusdam possimus sunt nam! Perspiciatis vitae illo nostrum culpa quis earum officiis
                        ipsum ducimus dicta cumque possimus consequuntur, ad ratione laudantium provident a iusto mollitia
                        repudiandae perferendis ullam nemo accusantium soluta?
                        <br /><br />
                        Dolore minus amet quisquam nostrum voluptatem
                        consequatur recusandae rerum tempora magni dolorum neque ipsa optio alias, perferendis nemo explicabo
                        laudantium voluptas nesciunt maiores. Nostrum veritatis pariatur nihil doloremque iure et ratione, est a
                        obcaecati! Suscipit, quam magnam inventore delectus ullam consequatur explicabo nemo ipsum nulla id
                        tenetur numquam vero, exercitationem ex!
                    </p>
            </div>
            {/* <div class="img-container">
                <img src={require("../../Components/Images/image2.jpg")} alt="Image1" class="donate-img"></img>
            </div> */}

            <div class="form-data">
            <form className="form" onSubmit={handleSubmit}>
                    <h2>Details</h2>

                    <label>Name</label>
                    <input className="response" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>

                    <label>Phone Number</label>
                    <PhoneInput placeholder="Phone number" limitMaxLength={true} defaultCountry="IN" value={phone} onChange={setPhone}/>

                    <label>Email</label>
                    <input className="response" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                    <label>Address</label>
                    <textarea className="response" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>

                    <button type="submit" className="send-btn" style={{background : loader ? "rgba(10, 10, 10, 0.5)" : "rgba(0, 0, 0, 0)"}}>Submit</button>

                </form>
            </div>
            <Footer />
        </div >
    );
}

export default Donate;