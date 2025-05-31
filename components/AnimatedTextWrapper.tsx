"use client";

import React, { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText"; // パスに応じて調整

const texts = [
  "WELCOME　TO　MY<br>PORTFOLIO　SITE!!",
  "私のポートフォリオサイトへようこそ！",
  "Benvenuti　nel　mio　sito　di　portfolio!",
];

const AnimatedTextWrapper = () => {
  const [index, setIndex] = useState(0);
  const [key, setKey] = useState(0); // アニメーション再実行用

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
      setKey((prev) => prev + 1); // 強制的に再レンダリング
    }, 10000); // 10秒ごとに切り替え

    return () => clearInterval(interval); // クリーンアップ
  }, []);

  return <AnimatedText key={key} text={texts[index]} />;
};

export default AnimatedTextWrapper;