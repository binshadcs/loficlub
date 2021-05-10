import React from "react";

// youtube iframe
import YouTube from "@u-wave/react-youtube";

const YTwrapper = ({ videoId, paused, volume, muted }) => {
  return (
    <YouTube
      video={videoId}
      autoplay
      paused={paused}
      volume={volume}
      muted={muted}
      suggestedQuality="240"
    />
  );
};

export default YTwrapper;
