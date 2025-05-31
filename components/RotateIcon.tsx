"use client";

import { notoColorEmoji } from "@/app/font";
import { useEffect, useState } from "react";

type RotateIconProps = {
  icon: string
  coefficient: number
}

const RotateIcon = ({icon, coefficient}: RotateIconProps) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setRotation(scrollY * coefficient); // スクロール量に応じた回転角度
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        transform: `rotate(${rotation}deg)`,
        transition: "transform 0.1s linear",
      }}
    >
      <span className={`${notoColorEmoji.className} md:text-[2vw] text-[6vw]`}>{icon}</span>
    </div>
  );
};

export default RotateIcon;
