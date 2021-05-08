import React from "react";

// components
import { LofiPlayer } from ".";

const Home = ({ name, volume, setVolume, setPaused, paused, fetchVideo }) => {
  return (
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
        fetchVideo={fetchVideo}
      />
    </div>
  );
};

export default Home;
