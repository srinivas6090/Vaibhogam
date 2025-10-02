import React from 'react';
// import heroImg from '../assets/hero.png';
import FloatingNav from './FloatingNav';
import logoImg from '../assets/Vaibhogam-Logo.png';
// import { FaWhatsapp } from 'react-icons/fa';

export default function HeaderHero() {
  return (
    <section id="hero" className="hero" style={{ position: "relative" }}>
      <img
        src={logoImg}
        alt="Vaibhogam Logo"
        className="hero-logo top-left" // add top-left class
      />
      <p className="hero-center-text">
        Lorem
        <br />
        consectetur
        <br />
        elit
      </p>
      <FloatingNav />
    </section>
  );
}