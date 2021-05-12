import React from "react";

// components
import { Track } from "../components";

const StaredMusic = ({ fetchVideo, staredMusic, setStaredMusic }) => {
  return (
    <div className="block h-full items-center justify-start flex-wrap flex-col overflow-scroll pb-[30%] lg:pb-[10%] relative">
      <h1 className="text-5xl text-center mt-3 animate__animated animate__fadeInDown">
        Your Playlist
      </h1>
      <div className="flex items-center justify-center flex-wrap w-full mt-3">
        {staredMusic.map((track, index) => (
          <Track
            videoId={track.videoId}
            name={track.name}
            key={index}
            fetchVideo={fetchVideo}
            staredMusic={staredMusic}
            setStaredMusic={setStaredMusic}
          />
        ))}
        {staredMusic.length < 1 && (
          <div className="relative">
            <p className="text-thin mt-3">You haven't saved any music.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StaredMusic;
