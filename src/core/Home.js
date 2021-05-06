import { Slider } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Header, YTwrapper } from "../components";
import getRandomBg from "../helper/RandomImageCalls";

const Home = () => {
  const [bgImage, setBgImage] = useState("");
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(1);
  const [speed, setSpeed] = useState(1);

  const pauseVideo = () => {
    setPaused(!paused);
  };

  useEffect(() => {
    setBgImage(getRandomBg());
  }, []);
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
          <h1>{volume}</h1>
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={(e, volume) => setVolume(volume)}
            aria-labelledby="continuous-slider"
          />
          <h1>{volume}</h1>
          <Slider
            min={0}
            max={100}
            value={volume}
            onChange={(e, volume) => setVolume(volume)}
            aria-labelledby="continuous-slider"
          />
          <YTwrapper
            videoId="5qap5aO4i9A"
            paused={paused}
            volume={volume / 100}
            speed={speed}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
