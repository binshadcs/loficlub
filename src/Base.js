import React, { useEffect, useState } from "react";
import { Header } from "./components";
import { getRandomBg, getRandomGif } from "./helper/RandomImageCalls";

const Base = ({ children }) => {
  const [bgImage, setBgImage] = useState("");
  const [bgGif, setBgGif] = useState("");

  useEffect(() => {
    setBgGif(getRandomGif());
    setBgImage(getRandomBg());
  }, []);

  return (
    <div className="h-screen text-[#F0E9E2] bg-cover  w-full">
      <div
        className="relative  flex items-center justify-center h-screen w-screen
        bg-center random-bg bg-cover"
        style={{
          background: `url("${bgGif}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="vignette"></div>
        <div
          className="relative bg-gradient-to-t h-[90%] w-[90%] rounded-xl overflow-hidden shadow-2xl from-[#414345] to-[#111] bg-cover bg-center border-2 border-[#4CD2D6] shadow-5xl"
          style={{
            background: `linear-gradient(to bottom, rgba(10,10,10,.76),rgba(0,0,0,.97)), url("${bgGif}")`,
            backgroundSize: "cover",
          }}
        >
          <div className="lines-animation"></div>
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Base;
