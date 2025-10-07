import React from "react";
import "./OverlayForm.css";

const PaymentPage = ({ onClose }) => {
  return (
    <div className="bottom-sheet-overlay">
      <div className="bottom-sheet">
        <button className="bottom-close-btn" onClick={onClose}>
          Close
        </button>

        <h2 className="bottom-title">Payment</h2>
        <p className="overlay-text">Payment integration coming soon.</p>

        <button className="bottom-submit" onClick={onClose}>
          Back
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
