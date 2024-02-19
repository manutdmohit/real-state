import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './Footer.css';

const Footer = () => {
  return (
    <footer className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <div className="f-column">
            <span className="primaryText">Information</span>
            <span className="secondaryText">Sydney, Australia</span>
          </div>

          {/* Menu */}
          <div className="flexCenter f-menu">
            <Link to="/property">Property</Link>
            <Link to="/contacts">Contact</Link>
            <Link to="/services">Service</Link>
            <Link to="/product">Product</Link>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
