import React from "react";
import { Sidebar } from "../components";
import getRandomBg from "../helper/RandomImageCalls";

const Home = () => {
  return (
    <div
      className="h-screen text-white bg-cover flex"
      style={{
        background: `linear-gradient(rgba(10,10,10, .5),rgba(0,0,0,.9)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px), url("${getRandomBg()}")`,
        backgroundSize: "cover",
      }}
    >
      <Sidebar />
      <h1>LofiCddlub</h1>
    </div>
  );
};

export default Home;
