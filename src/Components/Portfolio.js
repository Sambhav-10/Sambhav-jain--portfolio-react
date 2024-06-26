import React from "react";

const Portfolio = () => {
  return (
    <div className="text-white p-2 h-full my-5">
    <h1 className="text-center text-[#77b28c] text-6xl font-bold py-5">Project</h1>
    <div className="w-full md:h-96 flex justify-center">
      <div className="w-[80%] h-full  md:flex md:border-0 border-2 border-[#77b28c] p-2 rounded-lg md:p-0">
        <div className="w-full md:w-1/2">
          <button className="w-full h-full bg-[#77b28c] rounded-xl">
            <img src=" " alt="some problem" className="h-48" />
          </button>
        </div>
        <div className=" md:w-1/2 flex justify-center items-center text-center px-5">
          <div className="">
            <h4 className="text-2xl">Youtube video plateform</h4>
            <p className="hidden md:block my-4 text-sm">
              Developed a React-powered YouTube video clone, utilizing
              useState and useEffect hooks for API integration. Implemented
              useContext with a custom context API for global state
              management, allowing a toggle sidebar and incorporating
              optional chaining for graceful handling of undefined and null
              values. Integrated React Router for seamless navigation, added
              search suggestions with debouncing for optimal API performance
            </p>
            <p>Tools- React</p>
            <div className="md:mt-5 flex w-full justify-around gap-5 text-center ">
               <button className="bg-[#77b28c] w-28 rounded-xl p-2">
                <a href="https://youtube-all-clone.vercel.app/" target="_blank">Live</a>
              </button>
              <button className="bg-[#77b28c] w-28 rounded-xl p-2">
              <a href="https://github.com/Sambhav-10/youtube-all-clone" target="_blank">Sourse code</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
