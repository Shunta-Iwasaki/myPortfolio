"use client";

import { useEffect, useState } from "react";

const Walkman = () => {
    const images = [
        "./img/img_walkman_1.png",
        "./img/img_walkman_2.png",
        "./img/img_walkman_3.png",
        "./img/img_walkman_4.png",
        "./img/img_walkman_5.png",
        "./img/img_walkman_6.png",
      ];
      const [imageIndex, setImageIndex] = useState(0);
    
      useEffect(() => {
        let ticking = false;
    
        const handleScroll = () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              const scrollY = window.scrollY;
              const newIndex = Math.floor((scrollY % 700) / 100) % images.length; // ✅ images の範囲内に収める
              setImageIndex(newIndex);
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
        <div className="h-[100%]">
          <img className='h-[50%] relative top-[50%] translate-y-[-50%] w-auto' src={images[imageIndex]} alt="歩く人" />
        </div>
      );
    };

export default Walkman;
