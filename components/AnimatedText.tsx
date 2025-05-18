"use client";

import React from "react";

type AnimatedTextProps = {
  text: string;
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const elements: React.ReactNode[] = [];

  text.split("<br>").forEach((line, i) => {
    line.split("").forEach((char, j) => {
      elements.push(
        <span key={`${i}-${j}`} style={{ animationDelay: `${(i * 10 + j) * 0.05}s` }}>
          {char}
        </span>
      );
    });
    elements.push(<br key={`br-${i}`} />);
  });

  return <div className="animated-text">{elements}</div>;
};

export default AnimatedText;