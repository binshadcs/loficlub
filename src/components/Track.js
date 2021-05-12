import React, { useEffect, useState } from "react";

import { Button } from "@material-ui/core"; // material-ui

// react router
import { useHistory } from "react-router-dom";
import { BsStar, BsStarFill } from "react-icons/bs";

const Track = ({ videoId, name, fetchVideo, staredMusic, setStaredMusic }) => {
  const [isStared, setIsStared] = useState("");
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

  const addToStaredMusic = () => {
    if (typeof window !== undefined) {
      if (isStared) {
        setStaredMusic(
          staredMusic.filter((music) => music.videoId !== videoId)
        );
      } else {
        const video = {
          videoId: videoId,
          name: name,
        };
        setStaredMusic([...staredMusic, video]);
      }
    }
  };

  const fetchStaredMusic = () => {
    if (staredMusic.some((music) => music.videoId === videoId)) {
      setIsStared(true);
    } else {
      setIsStared(false);
    }
  };

  useEffect(() => {
    fetchStaredMusic();
  });

  return (
    <div className="relative rounded-lg items-center justify-center w-full lg:w-[28%] m-1 h-[15em] shadow-2xl overflow-hidden animate__animated animate__fadeInUp">
      <Button className="track">
        <div
          className="absolute top-0 rounded-sm right-[2px] z-10 bg-[#333] p-[6px] border border-[#666] text-[#ccc] hover:text-[#fff]"
          onClick={addToStaredMusic}
        >
          {isStared ? (
            <BsStarFill className="text-lg" />
          ) : (
            <BsStar className="text-lg" />
          )}
        </div>
        <img
          src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
          alt={name}
          className="rounded-md"
          onClick={updateVideo}
        />
        <h1 className="text-md font-light mt-1" onClick={updateVideo}>
          {name}
        </h1>
      </Button>
    </div>
  );
};

export default Track;
