import React from "react";
import landViewImg from "../assets/floorplan.png";

export default function LandView() {
  return (
    <section style={{ padding: "4rem 1rem", textAlign: "center", backgroundColor: "#6c1336", color: "#e6b87e" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "700", marginBottom: "2rem" }}>
        Land View
      </h1>
      <img
        src={landViewImg}
        alt="Land View"
        style={{
          width: "80%",
          maxWidth: "600px",
          borderRadius: "15px",
          boxShadow: "0 0 20px rgba(0,0,0,0.6)",
          height: "auto",
        }}
      />
    </section>
  );
}
