import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from "react-icons/fa";
import vLogo from '../assets/vijetha-logo.png';

export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="footer-top">
        <img src={vLogo} alt="Vijetha Group Logo" className="footer-logo" />
        <div className="footer-project">
          <div className="footer-project-main">A Project by<br />Vijetha constructions</div>
        </div>
      </div>
      <div className="footer-icons">
        <span className="footer-icon"><FaFacebookF /></span>
        <span className="footer-icon"><FaYoutube /></span>
        <span className="footer-icon"><FaInstagram /></span>
        <span className="footer-icon"><FaWhatsapp /></span>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copy">CompanyName @ 202X. All rights reserved.</div>
    </footer>
  );
}
