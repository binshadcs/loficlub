import { YTwrapper } from "../components";
import React, { useEffect, useState } from "react";
import Base from "../Base";
import { LofiPlayer } from ".";
import useLocalStorage from "../util/useLocalStorage";

const Home = ({ id, name, volume, setVolume, setPaused, paused }) => {
  return (
    <Base>
      <div className="flex items-end pb-[10%] justify-between items-between flex-col h-full">
        <div className="w-full flex-1">
          <div className="invisible"></div>
        </div>
        <LofiPlayer
          setPaused={setPaused}
          paused={paused}
          volume={volume}
          setVolume={setVolume}
          name={name}
        />
      </div>
    </Base>
  );
};

export default Home;
