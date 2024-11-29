import React from "react";

const Skills = () => {
  return (
    <div className="bg-black flex justify-center items-center text-white w-full h-[100vh] border-b-4 rounded-full border-[#77b28c]  md:my-0 my-5">
      <div>
        <h1 className="w-full text-center mt-5 text-6xl font-bold text-[#77b28c]">
          {" "}
          Skills
        </h1>
        <p className="text-center my-5 ">Check out some of my work</p>

        <div className="flex justify-center w-full ">
          <div className="flex  justify-center w-[80%] gap-10  flex-wrap">
            <div
              className="w-28  border-b-4 
           border-r-4  rounded-lg  border-[#77b28c]"
            >
              <img
                className="h-full w-full "
                // width={200}
                // height={300}
                src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
                alt=""
              />
            </div>
            <div className="h-[100px]   w-[100px] border-t-2 border-b-4 border-l-4 border-r-4  rounded-lg  border-[#77b28c]">
              <img
                className="h-full w-full "
                // width={200}
                // height={300}
                src="https://cdn-icons-png.flaticon.com/128/919/919827.png"
                alt=""
              />
            </div>
            <div className="h-[100px]   w-[100px] border-t-2 border-b-4 border-l-4 border-r-4  rounded-lg  border-[#77b28c]">
              <img
                className="h-full w-full "
                // width={200}
                // height={300}
                src="https://cdn-icons-png.flaticon.com/128/4248/4248104.png"
                alt=""
              />
            </div>
            <div className="h-[100px]   w-[100px] border-t-2 border-b-4 border-l-4 border-r-4  rounded-lg  border-[#77b28c]">
              <img
                className="h-full w-full "
                // width={200}
                // height={300}
                src="https://cdn-icons-png.flaticon.com/128/919/919851.png"
                alt=""
              />
            </div>
            <div className="h-[100px]   w-[100px] border-t-2 border-b-4 border-l-4 border-r-4  rounded-lg  border-[#77b28c]">
              <img
                className="h-full w-full "
                // width={200}
                // height={300}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;


