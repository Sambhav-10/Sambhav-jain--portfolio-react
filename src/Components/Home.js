import React from "react";
// import Profile from "./profile.png";
import Background from "./Background.png";

import Resume from "./Resume.png";

const Home = () => {
  return (
    <div
      className=" w-full h-[100vh]  flex items-center justify-center bg-[url('https://images.pexels.com/photos/2034373/pexels-photo-2034373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-right md:bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className=" md:w-1/2">
        {/* <img src="" width={300} alt="sambhav jain profile " /> */}
      </div>

      <div className="text-white flex w-full md:w-1/2 items-center p-4 md:p-0">
        <div className="p-5">
          <p className=" pl-2 ">Hello, I'm</p>
          <h1 className=" mt-2 text-6xl  md:text-7xl font-bold text-[#77b28c]">
            Sambhav jain
          </h1>
          <p className=" mt-2  p-4">
            "From lines of code to stunning websites, I'm the architect of your
            digital dreams."
          </p>
          <p className=" mt-5 font-bold">Frontend Developer</p>
          <button
            className="p-2 bg-[#77b28c] rounded-lg text-white mt-5 "
            onClick={() => window.open(Resume)}
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
