import React, { useState, useEffect, useRef } from "react";
import "./OverlayForm.css";
import { color } from "framer-motion";

const FormPage = ({ isOtp = false, onVerify, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [mobileNo, setMobileNo] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isAgreed, setIsAgreed] = useState(false);

  const inputRefs = useRef([]);

  useEffect(() => {
    if (isOtp && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [isOtp]);

  const handleOtpChange = (e, index) => {
    const val = e.target.value.slice(-1);
    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    onVerify && onVerify();
  };

  return (
    <div className="bottom-sheet-overlay">
      <div className="bottom-sheet" onClick={(e) => e.stopPropagation()}>
            <button className="bottom-close-btn" onClick={onClose}>
            Close
            </button>

            {!isOtp ? (
            <>
                <h2 className="bottom-title">Form</h2>

                <div className="bottom-field">
                <label>Full Name:</label>
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                    const input = e.target.value;
                    const onlyLetters = input.replace(/[^a-zA-Z\s]/g, "");
                    setFullName(onlyLetters);
                    }}
                    autoFocus
                />
            </div>


        <div className="bottom-field mobile-field">
        <label>Mobile no:</label>
        <div className="mobile-input-wrapper">
            <select
            className="country-code-select"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            >
            <option value="+91">+91 🇮🇳</option>
            <option value="+1">+1 🇺🇸</option>
            <option value="+44">+44 🇬🇧</option>
            <option value="+61">+61 🇦🇺</option>
            {/* <!-- Add more as needed --> */}
            </select>

                <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength="10"
                value={mobileNo}
                onChange={(e) => {
                    const input = e.target.value.replace(/\D/g, "");
                    if (input.length <= 10) {
                    setMobileNo(input);
                    }
                }}
                
            />
        </div>
</div>



            <div className="bottom-checkbox">
              <input
                type="checkbox"
                checked={isAgreed}
                onChange={(e) => setIsAgreed(e.target.checked)}
              />
              <span style={{ color: "#e2a161" }}>
                I agree to receive newsletters, marketing content, and terms.
              </span>
            </div>

            <button
              className="bottom-submit"
              onClick={handleSubmit}
              disabled={!fullName || !mobileNo || !isAgreed}
            >
              Get OTP
            </button>
          </>
        ) : (
          <>
            <p className="overlay-text">
              Please enter the OTP sent to +91 {mobileNo || "xxxxxxxxxx"}
            </p>

            <div className="otp-boxes">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            <button className="bottom-submit" onClick={handleSubmit}>
              Verify
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormPage;
