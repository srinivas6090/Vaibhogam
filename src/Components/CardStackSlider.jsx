import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";
import card3 from "../assets/card3.jpg";

const CARDS = [
  { id: 1, img: card1 },
  { id: 2, img: card2 },
  { id: 3, img: card3 },
];

const AUTO_PLAY_MS = 3000;
const ANIM_DURATION = 0.8;

export default function CardStackSliderMotion() {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    let animTimer = null;
    const timer = setTimeout(() => {
      setIsAnimating(true);
      animTimer = setTimeout(() => {
        setCurrent((prev) => (prev + 1) % CARDS.length);
        setNext((prev) => (prev + 1) % CARDS.length);
        setIsAnimating(false);
      }, ANIM_DURATION * 1000);
    }, AUTO_PLAY_MS);

    return () => {
      clearTimeout(timer);
      if (animTimer) clearTimeout(animTimer);
    };
  }, [current, isPaused]);

  const getStyle = (idx) => {
    if (idx === current && isAnimating) {
      return { x: -260, rotate: -10, opacity: 0, scale: 0.98, y: 0, zIndex: 60 };
    }
    if (idx === current && !isAnimating) {
      return { x: 0, rotate: 0, opacity: 1, scale: 1, y: 0, zIndex: 50 };
    }
    if (idx === next && isAnimating) {
      return { x: 0, rotate: 0, opacity: 1, scale: 1, y: 0, zIndex: 45 };
    }
    const pos = (idx - current + CARDS.length) % CARDS.length;
    if (pos === 1) {
      return { x: 20, rotate: 6, opacity: 0.95, scale: 0.96, y: 10, zIndex: 40 };
    }
    if (pos === 2) {
      return { x: 40, rotate: 8, opacity: 0.6, scale: 0.92, y: 18, zIndex: 30 };
    }
    return { x: 60 + pos * 6, rotate: 10, opacity: 0, scale: 0.9, y: 24, zIndex: 5 };
  };

  const handleDotClick = (idx) => {
    setCurrent(idx);
    setNext((idx + 1) % CARDS.length);
    setIsAnimating(false);
    setPaused(true);
    setTimeout(() => setPaused(false), 1200);
  };

  return (
    <div className="card-stack-bg">
      <div
        className="card-stack-slider"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        aria-roledescription="carousel"
      >
        {CARDS.map((card, idx) => {
          const style = getStyle(idx);
          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={style}
              transition={{ duration: ANIM_DURATION, ease: "easeInOut" }}
              style={{ zIndex: style.zIndex }}
              className="card-stack-card"
            >
              <img
                src={card.img}
                alt={`Card ${card.id}`}
                className="card-image"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="card-stack-dots">
        {CARDS.map((_, i) => (
          <span
            key={i}
            onClick={() => handleDotClick(i)}
            className={`dot ${i === current ? "active" : ""}`}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>

      <div className="card-stack-caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fugit, rerum harum perspiciatis sit recusandae officia laborum, deleniti ipsum asperiores neque ex veniam. Voluptatem repudiandae distinctio optio impedit delectus nihil!</div>
    </div>
  );
}
