import { YTwrapper } from "../components";
import React, { useState } from "react";
import Base from "../Base";
import { LofiPlayer } from ".";
import useLocalStorage from "../util/useLocalStorage";

const Home = () => {
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useLocalStorage("volume", 1);

  return (
    <Base>
      <div className="flex items-end pb-[10%] justify-between items-between flex-col h-full">
        <div className="w-full flex-1">
          <div className="invisible">
            {/* <YTwrapper
              videoId="5qap5aO4i9A"
              paused={paused}
              volume={volume / 100}
            /> */}
          </div>
        </div>
        <LofiPlayer
          setPaused={setPaused}
          paused={paused}
          volume={volume}
          setVolume={setVolume}
        />
      </div>
    </Base>
  );
};

export default Home;
