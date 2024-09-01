import React from "react";
import Fade from "react-reveal";

const About = ({ data }) => {
  if (!data) return null;

  const {  bio, addresses, phone, email } = data;

  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            {/* You can uncomment and use this if you want to show a profile picture */}
            {/* <img
              className="profile-pic"
              src={"images/" + data.image}
              alt="Profile Pic"
            /> */}
          </div>
          <div className="nine columns main-col">
            <h2>About Us</h2>
            <p>{bio}</p>
            <div className="row">
              {/* Map through the addresses array to render multiple columns */}
              {addresses.map((address, index) => (
                <div key={index} className="columns contact-details">
                  <p className="address">
                    <h2>{address.name}</h2>
                    <span>
                      {address.street}
                      <br />
                      {address.city} {address.state}, {address.zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
