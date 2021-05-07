import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Track = ({ videoId, name }) => {
  let history = useHistory();

  const updateVideo = () => {
    if (typeof window !== undefined) {
      localStorage.setItem("videoId", videoId);
      localStorage.setItem("name", name);
    }
    history.push("/");
  };
  return (
    <div
      className="relative rounded-lg items-center justify-center  overflow-hidden w-[28%] m-1 h-[15em] shadow-2xl overflow-hidden"
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
