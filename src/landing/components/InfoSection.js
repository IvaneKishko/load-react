import React from "react";

import "./InfoSection.css";
import truck from "../../assets/images/goods-on-transit-one.jpg";

const InfoSection = () => {
  return (
    <>
      <section className="info-section">
        <div className="info-section__card">
          <div className="info-section__card-text">
            <h3>How it Works? - Clients</h3>
            <p>
              Ready to move your cargo or automobile hassle-free?
              <br />
              <br />
              Look no further! Our streamlined platform allows you to
              effortlessly upload your cargo or car details, including pickup
              and drop-off locations, weight, and contact information.
              Experience peace of mind as our network of trusted transporters
              swiftly responds with competitive offers. Get started today and
              enjoy seamless shipping from start to finish!
            </p>
          </div>
          <img
            src="https://howtostartanllc.com/images/business-ideas/business-idea-images/tractor-trailer-business.jpg"
            alt="truck"
          />
        </div>
        <div className="info-section__card">
          <div className="info-section__card-text">
            <h3>
              How it Works? - <span className="span-bold">Transporters</span>
            </h3>
            <p>
              Join Us Today! Sign Up: Create your free account.
              <br />
              <br />
              Discover Loads:Explore premium transportation opportunities
              nearby. Engage with Clients: Reach out seamlessly. Schedule
              Transportation: Coordinate pickups and deliveries effortlessly.
              Transport with Confidence: Monitor shipments in real-time.
              Revolutionize your transportation experience now!
            </p>
          </div>
          <img src={truck} alt="truck" />
        </div>
      </section>
    </>
  );
};

export default InfoSection;
