import React from "react";

const Portfolio = () => {
  return (
    <div className="text-white p-2">
    <h1 className="text-center text-[#77b28c] text-6xl font-bold py-5">Project</h1>
    <div className="w-full h-96 flex justify-center">
      <div className="w-[80%] h-full  flex">
        <div className="w-1/2">
          <button className="w-full h-full bg-[#77b28c] rounded-xl">
            <img src=" " alt="some problem" className="" />
          </button>
        </div>
        <div className="w-1/2 flex justify-center items-center text-center px-5">
          <div className="">
            <h4 className="text-2xl">Youtube video plateform</h4>
            <p className="my-4">
              Developed a React-powered YouTube video clone, utilizing
              useState and useEffect hooks for API integration. Implemented
              useContext with a custom context API for global state
              management, allowing a toggle sidebar and incorporating
              optional chaining for graceful handling of undefined and null
              values. Integrated React Router for seamless navigation, added
              search suggestions with debouncing for optimal API performance
            </p>
            <p>Tools- React</p>
            <div className="mt-5 flex w-full justify-around gap-5 text-center ">
              <button className="bg-[#77b28c] w-28 rounded-xl p-2">Live</button>
              <button className="bg-[#77b28c] w-28 rounded-xl p-2">Sourse code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
