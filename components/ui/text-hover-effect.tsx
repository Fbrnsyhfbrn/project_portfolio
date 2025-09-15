"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const TextHoverEffect = ({
  names,
  duration,
  interval = 2000,
}: {
  names: string[];
  duration?: number;
  interval?: number;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % names.length);
    }, interval);
    return () => clearInterval(id);
  }, [names, interval]);

  useEffect(() => {
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({ cx: `${cxPercentage}%`, cy: `${cyPercentage}%` });
    }
  }, [cursor]);

  const text = names[currentIndex];

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse" cx="50%" cy="50%" r="25%">
          <stop offset="0%" stopColor={hovered ? "#eab308" : "#aaa"} />
          <stop offset="25%" stopColor={hovered ? "#ef4444" : "#bbb"} />
          <stop offset="50%" stopColor={hovered ? "#3b82f6" : "#ccc"} />
          <stop offset="75%" stopColor={hovered ? "#06b6d4" : "#ddd"} />
          <stop offset="100%" stopColor={hovered ? "#8b5cf6" : "#eee"} />
        </linearGradient>


        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={maskPosition}
          transition={{ duration: duration ?? 0, ease: "easeOut" }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <mask id="textMask">
          <rect x="0" y="0" width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      <AnimatePresence mode="wait">
        <motion.g key={text}>
          {/* Outline fade up */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="currentColor"
            strokeWidth="0.3"
            className="fill-transparent font-[helvetica] text-2xl lg:max-w-full lg:text-xl font-bold dark:text-neutral-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {text}
          </motion.text>
          

          {/* Gradient + mask fade up */}
          <motion.text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            stroke="url(#textGradient)"
            strokeWidth="0.3"
            mask="url(#textMask)"
            className="fill-transparent font-[helvetica] text-2xl lg:max-w-full lg:text-xl font-bold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {text}
          </motion.text>
        </motion.g>
      </AnimatePresence>
    </svg>
  );
};
