import React from "react";

// components
import { LofiPlayer } from ".";

const Home = ({
  name,
  volume,
  setVolume,
  setPaused,
  paused,
  fetchVideo,
  muted,
  buffering,
  toggleMute,
  isFullScreen,
  setIsFullScreen,
  setBgGif,
}) => {
  return (
    <div
      className="flex items-end pb-[10%] justify-between items-between flex-col h-full"
      id="home"
    >
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
        muted={muted}
        buffering={buffering}
        toggleMute={toggleMute}
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        setBgGif={setBgGif}
      />
    </div>
  );
};

export default Home;
