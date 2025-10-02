import React, { useState, useEffect, useRef } from "react";
import {
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaRegClipboard,
  FaRupeeSign,
  FaRegHandPointer,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const actions = [
  { icon: <FaMapMarkerAlt />, label: "Location", to: "/location" },
  { icon: <FaProjectDiagram />, label: "Land View", to: "/landview" },
  { icon: <FaRegClipboard />, label: "Form", to: "/form" },
  { icon: <FaRupeeSign />, label: "Payment", to: "/payment" },
];

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // detect touch devices once
  useEffect(() => {
    const onFirstTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", onFirstTouch, { once: true });
    return () => window.removeEventListener("touchstart", onFirstTouch);
  }, []);

  // click / tap outside to close
  useEffect(() => {
    function handleDocPointer(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleDocPointer);
    document.addEventListener("touchstart", handleDocPointer);
    return () => {
      document.removeEventListener("mousedown", handleDocPointer);
      document.removeEventListener("touchstart", handleDocPointer);
    };
  }, []);

  const handleNavClick = (to) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <div
      ref={containerRef}
      className={`fab-nav-container ${open ? "open" : ""}`}
      // note: we rely on the invisible hover-area and icon handlers to keep open,
      // so we do not need onMouseEnter here for desktop (icons also set it).
    >
      {/* invisible area that captures hover while menu is open (so moving to icons doesn't close) */}
      <div
        className="fab-hover-area"
        onMouseEnter={() => !isTouch && setOpen(true)}
        onMouseLeave={() => !isTouch && setOpen(false)}
        aria-hidden
      />

      {actions.map(({ icon, label, to }, i) => (
        <button
          key={label}
          className="fab-icon-btn"
          style={{ "--i": i }}
          onMouseEnter={() => !isTouch && setOpen(true)}
          onFocus={() => setOpen(true)}
          onMouseLeave={() => !isTouch && setOpen(true)} // keep open while hovering icons
          onClick={() => handleNavClick(to)}
          title={label}
          tabIndex={open ? 0 : -1} // only keyboard-focusable when open
          aria-label={label}
        >
          {icon}
        </button>
      ))}

      <button
        className="fab-main-btn"
        onMouseEnter={() => !isTouch && setOpen(true)}
        onClick={() => setOpen((s) => !s)} // tap/click toggles on mobile / desktop
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <FaRegHandPointer color="#6c1336" size={34} />
      </button>
    </div>
  );
}
