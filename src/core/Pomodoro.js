import React, { useState } from "react";

// material design
import { Button, Tooltip } from "@material-ui/core";

// timer
import { CountdownCircleTimer } from "react-countdown-circle-timer";

// icons
import { BsClockHistory, BsDash, BsPlus } from "react-icons/bs";
import { IoPauseCircleOutline } from "react-icons/io5";

const Pomodoro = () => {
  // key is just to restart the timer on every change
  const [key, setKey] = useState(0);

  // working
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWorkTime, setIsWorkTime] = useState(true);

  const [times, setTimes] = useState({
    worktime: 25,
    breaktime: 5,
  });
  const { worktime, breaktime } = times;

  // helpers
  const convertToMin = (value) => {
    return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
  };

  const convertToSec = (value) => {
    return value * 60;
  };

  return (
    <div className="relative block lg:flex items-center justify-center h-full w-full pb-[10%] overflow-y-scroll">
      <div className="w-full lg:w-[70%] h-[80%] lg:h-full flex items-center justify-center flex-col animate__animated animate__fadeInLeft">
        <div className="m-6">
          <CountdownCircleTimer
            isPlaying={isPlaying}
            key={key}
            duration={
              isWorkTime ? convertToSec(worktime) : convertToSec(breaktime)
            }
            colors={[
              ["#3a49d4", 0.33],
              ["#3a49d4", 0.33],
              ["#3a49d4", 0.33],
            ]}
            size={220}
            onComplete={() => {
              setIsWorkTime(!isWorkTime);
              setKey((prevKey) => prevKey + 1);
              return [true, 1000];
            }}
          >
            {({ remainingTime }) => {
              return (
                <h3 className="text-5xl">{convertToMin(remainingTime)}</h3>
              );
            }}
          </CountdownCircleTimer>
        </div>

        {!isWorkTime && (
          <h1 className="text-4xl font-medium mb-3">
            Break Time, New Session Start in {breaktime} mins
          </h1>
        )}
        <div className="flex">
          <div
            className="border border-[#4CD2D6] rounded-md m-1 hover:bg-[#4CD2D680] duration-500"
            onClick={() => {
              setKey((prevKey) => prevKey + 1);
            }}
          >
            <Tooltip title="Restart" arrow>
              <Button className="track flex text-xl">
                <span className="text-xl font-light flex items-center justify-center">
                  Restart <BsClockHistory className="ml-1" />
                </span>
              </Button>
            </Tooltip>
          </div>
          <div
            className="border border-[#4CD2D6] rounded-md m-1 hover:bg-[#4CD2D680] duration-500"
            onClick={() => setIsPlaying(!isPlaying)}
          >
            <Tooltip title={!isPlaying ? "Start" : "Stop"} arrow>
              <Button className="track flex text-xl">
                <span className="text-xl font-light flex items-center justify-center">
                  {!isPlaying ? "Start" : "Stop"}
                  <IoPauseCircleOutline className="text-2xl ml-2" />
                </span>
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[30%] h-[90%] lg:h-full bg-gray-50 mr-5 rounded-md bg-gradient-to-t from-[#000] to-[#333] border border-[#4CD2D6] flex items-center justify-center animate__animated animate__fadeInRight">
        <div className="flex items-center justify-center flex-col">
          <h1 className="text-4xl leading-8">{worktime} Mins</h1>
          <h1 className="text-md text-gray-300">Session Time</h1>
          <div className="flex items-center justify-center mt-1">
            <div
              className="flex items-center overflow-hidden border border-[#4CD2D6] rounded-md ml-1 mr-1"
              onClick={() => {
                setTimes({
                  ...times,
                  worktime: worktime + 1,
                });
                setKey((prevKey) => prevKey + 1);
              }}
            >
              <Button className="">
                <BsPlus className=" text-2xl text-[#F0E9E2]" />
              </Button>
            </div>
            <div
              className="flex items-center overflow-hidden border border-[#4CD2D6] rounded-md ml-1 mr-1"
              onClick={() => {
                setTimes({
                  ...times,
                  worktime: worktime - 1,
                });
                setKey((prevKey) => prevKey + 1);
              }}
            >
              <Button className="">
                <BsDash className=" text-2xl text-[#F0E9E2]" />
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col mt-6">
            <h1 className="text-4xl leading-8">{breaktime} Mins</h1>
            <h1 className="text-md text-gray-300">Break Time</h1>
            <div className="flex items-center justify-center mt-1">
              <div
                className="flex items-center overflow-hidden border border-[#4CD2D6] rounded-md ml-1 mr-1"
                onClick={() => {
                  if (!isWorkTime) {
                    setTimes({
                      ...times,
                      breaktime: breaktime + 1,
                    });
                    setKey((prevKey) => prevKey + 1);
                  }
                }}
              >
                <Button className="">
                  <BsPlus className=" text-2xl text-[#F0E9E2]" />
                </Button>
              </div>
              <div
                className="flex items-center overflow-hidden border border-[#4CD2D6] rounded-md ml-1 mr-1"
                onClick={() => {
                  if (!isWorkTime) {
                    setTimes({
                      ...times,
                      breaktime: breaktime - 1,
                    });
                    setKey((prevKey) => prevKey + 1);
                  }
                }}
              >
                <Button className="">
                  <BsDash className=" text-2xl text-[#F0E9E2]" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
