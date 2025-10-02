import React, { useRef } from "react";
import poolImg from "../assets/pool.jpg";
import mansionImg from "../assets/mansion.png";
import gymImg from "../assets/gym.jpg";
import tennisImg from "../assets/tennis.jpg";

const AMENITIES = [
  { label: "Swimming", img: poolImg },
  { label: "Club House", img: mansionImg },
  { label: "Gym", img: gymImg },
  { label: "Tennis Court", img: tennisImg },
  { label: "Children's Play", img: tennisImg },
  { label: "Garden", img: poolImg },
];

export default function Amenities() {
  const containerRef = useRef(null);

  return (
    <section className="amenities-section">
      <h2 className="amenities-title">Amenities</h2>
      <div className="amenities-scroll-container" ref={containerRef}>
        {AMENITIES.map((amenity, idx) => (
          <div className="amenity-card" key={idx}>
            <div className="amenity-label">{amenity.label}</div>
            <img src={amenity.img} alt={amenity.label} className="amenity-img" />
          </div>
        ))}
      </div>
    </section>
  );
}