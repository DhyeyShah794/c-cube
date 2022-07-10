import React from 'react';
import Nav from '../../Components/Navbar/navbar';
import Footer from '../../Components/Footer/footer';
import './donate.css';


const Donate = () => {
    return (
        <div className="donate">
            <Nav />
            {/* <h1 className="dtitle">Donate</h1> */}
            <div className="info" id="donationinfo">
                <h2>Donation</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem veniam ipsum culpa voluptates ratione
                    suscipit nesciunt eius facilis illo distinctio explicabo sapiente voluptate beatae aspernatur, ex qui
                    tempora quibusdam.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quidem eaque voluptates excepturi in culpa ab,
                    voluptatibus corrupti earum, vel provident, officiis rerum facilis cupiditate! Id dolorum quaerat unde
                    deserunt.<br /> This will also benefit the community which we<br />
                    serve and together we can bring smile on a
                    lot of people's faces.
                </p>
                <p>Since our inception we have received donation from 1000+ donors.</p>
            </div>

            <div class="info" id="items">
                <h2>How to Donate?</h2>
                <ul>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus fugiat velit eius, esse iure, nemo animi
                        aliquid labore, quibusdam possimus sunt nam! Perspiciatis vitae illo nostrum culpa quis earum officiis
                        ipsum ducimus dicta cumque possimus consequuntur, ad ratione laudantium provident a iusto mollitia
                        repudiandae perferendis ullam nemo accusantium soluta? Dolore minus amet quisquam nostrum voluptatem
                        consequatur recusandae rerum tempora magni dolorum neque ipsa optio alias, perferendis nemo explicabo
                        laudantium voluptas nesciunt maiores. Nostrum veritatis pariatur nihil doloremque iure et ratione, est a
                        obcaecati! Suscipit, quam magnam inventore delectus ullam consequatur explicabo nemo ipsum nulla id
                        tenetur numquam vero, exercitationem ex!
                    </p>
                </ul>
            </div>
            <br />
            <div class="img-container">
                <img src={require("../../Components/Images/image2.jpg")} alt="Image1" class="image" id="img1"></img>
            </div>

            {/* </div > */}
            <div class="form-data">
                <table>
                    <tbody>
                        <tr>
                            <td>Full Name:</td>
                            <td><input class="contact-us-text" id="fullname" type="text" placeholder="Enter your Full name" required></input>
                            </td>
                        </tr>
                        <tr>
                            <td>Email Id:</td>
                            <td><input class="contact-us-text" id="email" type="email" placeholder="Enter your Email id" required></input></td>
                        </tr>
                        <tr>
                            <td>Phone Number:</td>
                            <td><input class="contact-us-text" id="phno" type="text" placeholder="Enter your number" required></input></td>
                        </tr>
                        <tr>
                            <td>Address:</td>
                            <td><input class="contact-us-text" id="addr" type="text" placeholder="Flat no, Apartment Name,
                        Landmark, Area, City, Pincode ." required></input></td>
                        </tr>
                        <tr>
                            <td>Transaction ID:</td>
                            <td><input class="contact-us-text" id="things" type="text" placeholder="Reason"
                                required></input></td>
                        </tr>
                        <tr>
                            <td id="btn"><button id="senddata">DONATE NOW</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </div >
    );
}

export default Donate;