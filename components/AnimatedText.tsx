"use client";

import React from "react";

type AnimatedTextProps = {
  text: string;
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
  return (
    <div className="animated-text">
      {text.split("").map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;