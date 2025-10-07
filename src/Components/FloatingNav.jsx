import React, { useState, useEffect, useRef } from "react";
import formIcon from "../assets/exam.svg";
import layoutIcon from "../assets/layout.svg";
import locationIcon from "../assets/location.svg";
import rupeeIcon from "../assets/rupee.svg";
import { FaRegHandPointer } from "react-icons/fa";

const actions = [
  {
    icon: <img src={rupeeIcon} alt="Price" style={{ width: "20px", height: "20px" }} />,
    label: "Price",
    to: "payment",
  },
  {
    icon: <img src={formIcon} alt="Form" style={{ width: "20px", height: "20px" }} />,
    label: "Form",
    to: "form",
  },
  {
    icon: <img src={layoutIcon} alt="Layout" style={{ width: "20px", height: "20px" }} />,
    label: "Layout",
    to: "layout",
  },
  {
    icon: <img src={locationIcon} alt="Location" style={{ width: "20px", height: "20px" }} />,
    label: "Location",
    to: "location",
  },
];

export default function FloatingNav({ setCurrentPage, fabOpen, setFabOpen }) {
  const [isTouch, setIsTouch] = useState(false);
  const containerRef = useRef(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const onFirstTouch = () => setIsTouch(true);
    window.addEventListener("touchstart", onFirstTouch, { once: true });
    return () => window.removeEventListener("touchstart", onFirstTouch);
  }, []);

  // Lock body scroll when FAB is open
  useEffect(() => {
    if (fabOpen) {
      // Save current scroll position
      scrollYRef.current = window.scrollY || document.documentElement.scrollTop;

      // Apply styles to lock scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll styles
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";

      // Scroll back to saved position
      window.scrollTo(0, scrollYRef.current);
    }

    // Clean up in case component unmounts
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [fabOpen]);

  useEffect(() => {
    function handleDocPointer(e) {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target)) {
        if (typeof setFabOpen === "function") {
          setFabOpen(false);
        }
      }
    }
    document.addEventListener("mousedown", handleDocPointer);
    document.addEventListener("touchstart", handleDocPointer);
    return () => {
      document.removeEventListener("mousedown", handleDocPointer);
      document.removeEventListener("touchstart", handleDocPointer);
    };
  }, [setFabOpen]);

  const handleNavClick = (to) => {
    if (typeof setFabOpen === "function") {
      setFabOpen(false);
    }
    setCurrentPage(to);
  };

  return (
    <div
      ref={containerRef}
      className={`fab-nav-container ${fabOpen ? "open" : ""}`}
    >
      <div
        className="fab-hover-area"
        onMouseEnter={() => !isTouch && setFabOpen(true)}
        onMouseLeave={() => !isTouch && setFabOpen(false)}
        aria-hidden
      />

      {actions.map(({ icon, label, to }, i) => (
        <button
          key={label}
          className="fab-icon-btn"
          style={{ "--i": i }}
          onMouseEnter={() => !isTouch && setFabOpen(true)}
          onFocus={() => setFabOpen(true)}
          onMouseLeave={() => !isTouch && setFabOpen(true)}
          onClick={() => handleNavClick(to)}
          title={label}
          tabIndex={fabOpen ? 0 : -1}
          aria-label={label}
        >
          {icon}
        </button>
      ))}

      <button
        className="fab-main-btn"
        onMouseEnter={() => !isTouch && setFabOpen(true)}
        onClick={() => {
          if (typeof setFabOpen === "function") setFabOpen((s) => !s);
        }}
        aria-expanded={fabOpen}
        aria-label={fabOpen ? "Close menu" : "Open menu"}
      >
        <FaRegHandPointer color="#6b0b0c" size={34} />
      </button>
    </div>
  );
}
