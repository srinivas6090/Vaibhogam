import React from 'react';
import mapImg from '../assets/map.png';

export default function Location() {
  return (
    <section className="location">
      <h2>Location</h2>
      <img src={mapImg} alt="Location Map" />
    </section>
  );
}