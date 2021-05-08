import React, { useEffect, useState } from "react";
import { Button, Slider } from "@material-ui/core"; // material-ui

// icons
import {
  BiTransfer,
  BiVolume,
  BiVolumeFull,
  BiVolumeLow,
  BiVolumeMute,
} from "react-icons/bi";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { FiChevronRight } from "react-icons/fi";
import { BsMusicNoteList } from "react-icons/bs";

// react router
import { Link } from "react-router-dom";

// axios
import axios from "axios";

const LofiPlayer = ({
  paused,
  setPaused,
  volume,
  setVolume,
  name,
  fetchVideo,
}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await axios
      .get("/data/tracks.json", {
        headers: {},
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  // random video
  const updatetoRandomVideo = () => {
    const randomVideo = data[Math.floor(Math.random() * data.length)];
    if (typeof window !== undefined) {
      const { id, name } = randomVideo;

      const video = {
        videoId: id,
        name: name,
      };
      localStorage.setItem("video", JSON.stringify(video));
    }
    fetchVideo();
  };

  // previous video
  const moveToPreviousVideo = () => {
    const currentVideo = data.filter((video) => video.name === name);
    const currentVideoIndex = currentVideo[0].index;

    if (typeof window !== undefined) {
      if (currentVideoIndex === 0) {
        console.log("no more previous video");
      } else {
        const { id, name } = data[currentVideoIndex - 1];

        const video = {
          videoId: id,
          name: name,
        };
        localStorage.setItem("video", JSON.stringify(video));
      }
    }
    fetchVideo();
  };

  // next video
  const moveToNextVideo = () => {
    const currentVideo = data.filter((video) => video.name === name);
    const currentVideoIndex = currentVideo[0].index;

    if (typeof window !== undefined) {
      if (data.length - 1 === currentVideoIndex) {
        console.log("no more next video");
      } else {
        const { id, name } = data[currentVideoIndex + 1];
        const video = {
          videoId: id,
          name: name,
        };

        localStorage.setItem("video", JSON.stringify(video));
      }
    }
    fetchVideo();
  };

  return (
    <div className="w-full pl-7">
      <div className="mb-1 flex">
        <div
          className="relative rounded-lg flex items-center justify-center bg-gradient-to-t from-[#00C9FF] to-[#92FE9D] overflow-hidden h-10 w-10 shadow-2xl"
          onClick={() => setPaused(!paused)}
        >
          <Button className="playBtn">
            <div class={`control-btn ${!paused && "paused"}`}>
              <label for="playpause"></label>
            </div>
          </Button>
        </div>
        <div
          className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl ml-1"
          onClick={updatetoRandomVideo}
        >
          <Button className="playBtn h-full">
            <BiTransfer className="text-2xl text-white" />
          </Button>
        </div>
        <Link to="/tracks">
          <div className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl">
            <Button className="playBtn h-full">
              <BsMusicNoteList className="text-2xl text-white" />
            </Button>
          </div>
        </Link>
        <div
          className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl ml-1"
          onClick={moveToPreviousVideo}
        >
          <Button className="playBtn h-full">
            <HiChevronDoubleLeft className="text-2xl text-white" />
          </Button>
        </div>
        <div
          className="relative rounded-lg flex items-center justify-center text-white overflow-hidden h-10 w-8 shadow-2xl"
          onClick={moveToNextVideo}
        >
          <Button className="playBtn h-full">
            <HiChevronDoubleRight className="text-2xl text-white" />
          </Button>
        </div>

        <div className="w-40 ml-1 flex items-center justify-center">
          <div className="mr-2">
            {volume < 1 ? (
              <BiVolumeMute className="text-2xl text-white" />
            ) : volume > 85 ? (
              <BiVolumeFull className="text-2xl text-white" />
            ) : volume < 45 ? (
              <BiVolume className="text-2xl text-white" />
            ) : (
              <BiVolumeLow className="text-2xl text-white" />
            )}
          </div>

          <Slider
            min={0}
            max={100}
            valueLabelDisplay="auto"
            value={volume}
            onChange={(e, volume) => setVolume(volume)}
          />
        </div>
      </div>
      <div className="flex items-start justify-start w-auto mt-2">
        {!paused ? (
          <div className="spectrum flex items-end justify-end h-5 mr-2">
            <div className="line1 bg-white line"></div>
            <div className="line2 bg-white line"></div>
            <div className="line3 bg-white line"></div>
            <div className="line4 bg-white line"></div>
          </div>
        ) : (
          <div className="spectrum flex items-end justify-end h-5 mr-2">
            <div className="h-[.2em] bg-white line"></div>
            <div className="h-[.2em] bg-white line"></div>
            <div className="h-[.2em] bg-white line"></div>
            <div className="h-[.2em] bg-white line"></div>
          </div>
        )}

        <Link to="/tracks" className="flex items-center justify-start w-auto">
          <h1 className="text-lg text-[#4CD2D6]">Click to Change</h1>
          <FiChevronRight className="text-xl text-[#4CD2D6]" />
          <h1 className="text-lg">{name}</h1>
        </Link>
      </div>
    </div>
  );
};

export default LofiPlayer;
