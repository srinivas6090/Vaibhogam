import { useState } from 'react'
import React from "react";
import HeaderHero from "./Components/HeaderHero";
import WeddingSlider from "./Components/WeddingSlider";
import Amenities from "./Components/Amenities";
import FloorPlan from "./Components/FloorPlan";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import BuildingShowcase from './Components/BuildingShowcase';
import CardStackSlider from './Components/CardStackSlider';
// import './App.css'
// import { FaWhatsapp, FaPhoneAlt, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

function App() {
  const [planSide, setPlanSide] = useState('East');

  return (
    <div>
      <HeaderHero />
      <main>
        <BuildingShowcase />
        <CardStackSlider />
        <Amenities />
        <FloorPlan planSide={planSide} setPlanSide={setPlanSide} />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;