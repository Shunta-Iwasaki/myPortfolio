"use client";

import React from "react";

type AnimatedTextProps = {
  text: string;
};

const AnimatedText = ({ text }: AnimatedTextProps) => {
  const elements: React.ReactNode[] = [];

  text.split("<br>").forEach((line, i) => {
    line.split("").forEach((char, j) => {
      // 全角スペース判定
      const isZenkakuSpace = char === "　";
      elements.push(
        <span key={`${i}-${j}`} 
          style={{ animationDelay: `${(i * 10 + j) * 0.05}s`,letterSpacing: isZenkakuSpace ? "-0.4em" : undefined, }}>
          {char}
        </span>
      );
    });
    elements.push(<br key={`br-${i}`} />);
  });

  return <div className="animated-text">{elements}</div>;
};

export default AnimatedText;