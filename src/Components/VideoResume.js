import React from "react";

// const VideoResume = () => {
//   return (
   
//   );
// };

const Video = () => {

 return <div className="w-full h-[100vh] flex justify-center items-center border-b-4 rounded-full border-[#77b28c]">
    <div className="w-full">
      <div>
      <div className="text-[#77b28c] text-center text-6xl font-bold mt-5 ">
          Video Resume
        </div>
        {/* border set */}
        <div className="flex mt-2  justify-center w-full my-10">
          <div className=" w-1/5 border-b-2 border-[#77b28c]"></div>
        </div>
        <div className="w-full  flex justify-center items-center">
          {/* add here apprrox 90percent width video full hight with border radiour*/}
          <div className="w-[50vw] h-[50vh] bg-slate-500 rounded-lg"></div>
        </div>
      </div>
    </div>
  </div>;
};
export default Video;
