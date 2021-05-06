import { Button } from "@material-ui/core";
import React from "react";

const Track = ({ videoId, name }) => {
  return (
    <div className="relative rounded-lg items-center justify-center  overflow-hidden w-[28%] m-1 h-[15em] shadow-2xl overflow-hidden">
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
