import React from 'react';
import FloatingNav from './FloatingNav';
import logoImg from '../assets/vaibhogam-logo-1.png';


export default function HeaderHero() {
  return (
    <section id="hero" className="hero" style={{ position: "relative" }}>
      <img
        src={logoImg}
        alt="Vaibhogam Logo"
        className="hero-logo top-left" // add top-left class
      />
      <FloatingNav />
    </section>
  );
}