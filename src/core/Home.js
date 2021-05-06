import React, { useState } from "react";
import { Header, YTwrapper } from "../components";
import getRandomBg from "../helper/RandomImageCalls";

const Home = () => {
  const bgImage = getRandomBg();
  const [paused, setPaused] = useState(false);

  const pauseVideo = () => {
    setPaused(!paused);
  };
  return (
    <div className="h-screen text-[#F0E9E2] bg-cover  w-full">
      <div
        className="relative  flex items-center justify-center h-screen w-screen
        bg-center random-bg"
        style={{
          background: `url("${bgImage}")`,
          backgroundSize: "cover",
        }}
      >
        <div className="vignette"></div>
        <div className="relative bg-gradient-to-t h-[90%] w-[90%] rounded-md shadow-2xl from-[#414345] to-[#111]">
          <div className="lines-animation"></div>
          <Header />
          <button onClick={pauseVideo}>Pause</button>
          <YTwrapper videoId="5qap5aO4i9A" paused={paused} />
        </div>
      </div>
    </div>
  );
};

export default Home;
