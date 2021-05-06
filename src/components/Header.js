import { Button } from "@material-ui/core";
import React from "react";
import {
  BsArrowsFullscreen,
  BsChatSquareDots,
  BsClock,
  BsMusicNoteList,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { Logo } from ".";

const Header = () => {
  return (
    <div className="flex w-full h-[10%] items-center justify-between ">
      <div className="flex items-center h-full ml-5">
        <Link to="/" className="flex">
          <Logo />
          <h3 className="text-2xl text-[#F0E9E2]  poppins ml-1 font-medium">
            Lofi Club
          </h3>
        </Link>
      </div>
      <div className="flex items-center mr-5">
        <Link to="/chat" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsChatSquareDots className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <Link to="/pomodoro" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsClock className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <Link to="/tracks" className="flex items-center">
          <div className="w-11 flex items-center overflow-hidden">
            <Button
              className="-mr-5 material-header-btn"
              style={{ marginLeft: "-20" }}
            >
              <BsMusicNoteList className=" text-2xl text-[#F0E9E2]" />
            </Button>
          </div>
        </Link>
        <div className="w-11 flex items-center overflow-hidden">
          <Button
            className="-mr-5 material-header-btn"
            style={{ marginLeft: "-20" }}
          >
            <BsArrowsFullscreen className=" text-2xl text-[#F0E9E2]" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
