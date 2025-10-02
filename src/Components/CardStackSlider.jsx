import React, { useState, useEffect, useRef } from "react";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const CARDS = [card1, card2, card3];

export default function CardStackSlider() {
  const [current, setCurrent] = useState(0);
  const pauseRef = useRef(false);
  const intervalRef = useRef(null);

  const mod = (n, m) => ((n % m) + m) % m;

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!pauseRef.current) {
        setCurrent((prev) => (prev + 1) % CARDS.length);
      }
    }, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
    pauseRef.current = true;
    setTimeout(() => (pauseRef.current = false), 1200);
  };

  return (
    <div className="card-stack-bg">
      <div
        className="card-stack-slider"
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
      >
        {CARDS.map((img, idx) => {
          let pos = mod(idx - current, CARDS.length);

          // Only show current, next, previous
          if (pos === 0 || pos === 1 || pos === CARDS.length - 1) {
            return (
              <div
                key={idx}
                className={`card-stack-card${pos === 0 ? " main-card" : ""}`}
                style={{
                  zIndex: pos === 0 ? 3 : pos === 1 ? 2 : 1,
                  opacity: pos === 0 ? 1 : 0.8,
                  transform:
                    pos === 0
                      ? "translateX(-50%) translateY(0px) scale(1)"
                      : pos === 1
                      ? "translateX(-40%) translateY(20px) scale(0.95) rotate(-3deg)"
                      : "translateX(-60%) translateY(20px) scale(0.95) rotate(3deg)",
                  boxShadow:
                    pos === 0
                      ? "0 20px 40px rgba(0,0,0,0.25)"
                      : "0 10px 20px rgba(0,0,0,0.15)",
                  transition:
                    "transform 0.9s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.5s ease",
                }}
              >
                <img src={img} alt={`Card ${idx}`} className="card-image" />
              </div>
            );
          }
          return null;
        })}
      </div>

      <div className="card-stack-dots">
        {CARDS.map((_, idx) => (
          <span
            key={idx}
            className={`dot${current === idx ? " active" : ""}`}
            onClick={() => handleDotClick(idx)}
          />
        ))}
      </div>

      <div className="card-stack-caption">Example Text</div>
    </div>
  );
}
