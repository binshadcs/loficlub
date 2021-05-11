import React from "react";

import { Button } from "@material-ui/core"; // material-ui

// react router
import { useHistory } from "react-router-dom";

const Track = ({ videoId, name, fetchVideo }) => {
  let history = useHistory();

  const updateVideo = () => {
    if (typeof window !== undefined) {
      const video = {
        videoId: videoId,
        name: name,
      };
      localStorage.setItem("video", JSON.stringify(video));
    }
    fetchVideo();
    history.push("/"); // redirects
  };

  return (
    <div
      className="relative rounded-lg items-center justify-center w-[28%] m-1 h-[15em] shadow-2xl overflow-hidden animate__animated animate__fadeInUp"
      onClick={updateVideo}
    >
      <Button className="track">
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={name}
          className="rounded-md"
        />
        <h1 className="text-md font-light mt-1">{name}</h1>
      </Button>
    </div>
  );
};

export default Track;
