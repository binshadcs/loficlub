import YouTube from "@u-wave/react-youtube";
import React from "react";

const YTwrapper = ({ videoId, paused, volume, speed }) => {
  return (
    <YouTube
      video={videoId}
      autoplay
      paused={paused}
      volume={volume}
      playbackRate={speed}
    />
  );
};

export default YTwrapper;
