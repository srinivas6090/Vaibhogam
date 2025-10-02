import React, { useState } from 'react';
import eastPlan from '../assets/floorplan-east.jpg';
import westPlan from '../assets/floorplan-west.jpg';

export default function FloorPlan({ planSide, setPlanSide }) {
  const [showModal, setShowModal] = useState(false);
  const plans = { East: eastPlan, West: westPlan };

  const handlePrev = () => setPlanSide(planSide === 'East' ? 'West' : 'East');
  const handleNext = () => setPlanSide(planSide === 'West' ? 'East' : 'West');

  return (
    <section className="floorplans">
      <h2 className="floorplan-title">Floor planings</h2>
      <div className="plan-toggle-row">
        <button
          className={`plan-toggle-btn${planSide === 'East' ? ' active' : ''}`}
          onClick={() => setPlanSide('East')}
        >East</button>
        <button
          className={`plan-toggle-btn${planSide === 'West' ? ' active' : ''}`}
          onClick={() => setPlanSide('West')}
        >West</button>
      </div>
      <div className="plan-carousel">
        <button className="arrow-btn left" onClick={handlePrev}>&#60;</button>
        <img
          src={plans[planSide]}
          alt={`${planSide} floor plan`}
          className="plan-image"
          onClick={() => setShowModal(true)}
          style={{ cursor: 'zoom-in' }}
        />
        <button className="arrow-btn right" onClick={handleNext}>&#62;</button>
      </div>
      <div className="btn-container">
        <button className="check-plan-btn">Check plan view</button>
      </div>
      <div className="area-details">
        <div>
          <span className="area-label">RERA Carpet Area</span>
          <br />
          <span className="area-value">1000 sq.ft</span>
        </div>
        <div>
          <span className="area-label">Balcony Area</span>
          <br />
          <span className="area-value">100 sq.ft</span>
        </div>
        <div>
          <span className="area-label">External Wall Area</span>
          <br />
          <span className="area-value">80 sq.ft</span>
        </div>
        <div>
          <span className="area-label">Common Area</span>
          <br />
          <span className="area-value">200 sq.ft</span>
        </div>
      </div>
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content">
            <img src={plans[planSide]} alt={`${planSide} enlarged floor plan`} />
          </div>
        </div>
      )}
    </section>
  );
}
