import { useState, useEffect } from 'react';
import React from "react";
import HeaderHero from "./Components/HeaderHero";
import Amenities from "./Components/Amenities";
import FloorPlan from "./Components/FloorPlan";
import Location from "./Components/Location";
import Footer from "./Components/Footer";
import BuildingShowcase from './Components/BuildingShowcase';
import CardStackSlider from './Components/CardStackSlider';
import FloatingNav from './Components/FloatingNav';
import FormPage from './Components/FormPage';
import PaymentPage from './Components/PaymentPage';

function App() {
  const [planSide, setPlanSide] = useState('East');
  const [currentPage, setCurrentPage] = useState('home');
  const [fabOpen, setFabOpen] = useState(false);

  // Blur content when FAB is open
  useEffect(() => {
    const root = document.getElementById('app-root');
    if (root) {
      root.classList.toggle('blurred', fabOpen);
    }
  }, [fabOpen]);
  useEffect(() => {
  const overlayVisible = ['form', 'otp', 'payment'].includes(currentPage);
  if (overlayVisible) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }

  return () => {
    document.body.classList.remove('modal-open');
  };
}, [currentPage]);

  const renderMainContent = () => (
    <>
      <HeaderHero />
      <main className="page-wrapper">
        <BuildingShowcase />
        <CardStackSlider />
        <Amenities />
        <FloorPlan planSide={planSide} setPlanSide={setPlanSide} />
        <Location />
      </main>
      <Footer />
    </>
  );

  return (
  <div id="app-root">
    <div id="content-wrapper" className={fabOpen ? 'blurred' : ''}>
      {renderMainContent()}
    </div>

    {/* Overlay Components */}
    {(currentPage === 'form' || currentPage === 'otp') && (
      <FormPage
        isOtp={currentPage === 'otp'}
        onVerify={() => {
          if (currentPage === 'form') setCurrentPage('otp');
          else setCurrentPage('home');
        }}
        onClose={() => setCurrentPage('home')}
      />
    )}

    {currentPage === 'payment' && (
      <PaymentPage onClose={() => setCurrentPage('home')} />
    )}

    {(currentPage === 'location' || currentPage === 'maps') && (
      <Location isMaps={currentPage === 'maps'} />
    )}

    {/* Move this outside of #content-wrapper */}
    <FloatingNav
      fabOpen={fabOpen}
      setFabOpen={setFabOpen}
      setCurrentPage={setCurrentPage}
    />
  </div>
);

}

export default App;
