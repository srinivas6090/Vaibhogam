import React from "react";
import videoBg from "../assets/700_F_296867325_LNMvDAonXPIDsThPiXwVENWBWvpKV3eh_ST.mp4"; // replace with actual video path
import bottomLeft from "../assets/bottom-left-icon.svg";
import topRight from "../assets/top-right-icon.svg";
export default function BuildingShowcase() {
  return (
    <section className="building-showcase-bg">
      <div className="building-showcase-frame">
        {/* ✅ Top-right image instead of inline SVG */}
        <img
          src={topRight}
          alt="Top Right Icon"
          className="corner-svg top-right"
          style={{ width: "60px", height: "60px" }}
        />

        {/* ✅ Bottom-left image instead of inline SVG */}
        <img
          src={bottomLeft}
          alt="Bottom Left Icon"
          className="corner-svg bottom-left"
          style={{ width: "60px", height: "60px" }}
        />

        {/* Main image */}
        <video
          className="building-showcase-video"
          src={videoBg}
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
    </section>
  );
}
