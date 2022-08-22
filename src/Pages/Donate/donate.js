import { React } from "react";
import Nav from "../../Components/Navbar/navbar";
import Footer from "../../Components/Footer/footer";
import "./donate.css";

const Donate = () => {
  return (
    <div className="donate">
      <Nav />
      <h2 className="d-title">
        <strong>Donation</strong>
      </h2>
      <div className="donation-info">
        <p className="d-text">
          This club is for Holistic development of youth. College education
          usually harps on the first two aspects, while association with an
          organization such as C-Cube helps in fulfilling the remaining one so
          show your support for the club by donating ! Your small contribution
          would count to a huge contribution and growth of the organisation and
          learning of individuals. This will also benefit the community which we
          serve and together we can bring smile on a lot of people's faces.
        </p>
      </div>
      <div class="img-container">
        <img
          src={require("../../Components/Images/image2.jpg")}
          alt="Image1"
          class="donate-img"
        ></img>
      </div>

      <div class="d-info">
        <h2>How to Donate?</h2>
        <p className="d-text">
          If you want to donate, follow these instructions before filling the form.
          <br />
          <br />
          Fill all your specified details in the form and make sure a proper
          email address is provided and submit it.
          <br />
          <br />
          You will recieve a mail with a link to pay which would be safe and
          secure to continue the transaction.
        </p>
      </div>
      
      <Footer />
    </div>
  );
};

export default Donate;
