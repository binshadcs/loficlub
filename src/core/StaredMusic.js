import React from "react";

// components
import { Track } from "../components";

const StaredMusic = ({ fetchVideo, staredMusic, setStaredMusic }) => {
  return (
    <div className="flex h-full items-center justify-center flex-wrap overflow-scroll pb-[10%]">
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
    </div>
  );
};

export default StaredMusic;
