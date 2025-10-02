import React, { useState } from 'react';
// import React from 'react';
import towersImg from '../assets/towers.png';
import weddingImg from '../assets/wedding.jpg';

const slides = [towersImg, weddingImg];

export default function WeddingSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <section className="wedding-slider">
      <div>
        <button onClick={prevSlide} aria-label="Previous">‹</button>
        <img src={slides[current]} alt="Showcase" />
        <button onClick={nextSlide} aria-label="Next">›</button>
      </div>
      <p className="example-text">Example Text</p>
    </section>
  );
}
