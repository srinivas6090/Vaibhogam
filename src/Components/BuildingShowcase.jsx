import React from "react";
import showcaseImg from "../assets/towers.png"; // Replace with your image path

export default function BuildingShowcase() {
  return (
    <section className="building-showcase-bg">
      <div className="building-showcase-frame">
        {/* Top-right SVG */}
        <svg className="corner-svg top-right" viewBox="0 0 46 46" fill="none">
          <path d="M40 6V23H23" stroke="#e6b87e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M29 17L23 23L29 29" stroke="#e6b87e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Bottom-left SVG */}
        <svg className="corner-svg bottom-left" viewBox="0 0 46 46" fill="none">
          <path d="M6 40V23H23" stroke="#e6b87e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M17 29L23 23L17 17" stroke="#e6b87e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Main image */}
        <img
          className="building-showcase-img"
          src={showcaseImg}
          alt="Building Showcase"
        />
      </div>
    </section>
  );
}
