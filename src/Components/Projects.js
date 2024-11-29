import React, { useState, useRef } from "react";
import { Projects } from "../utils/constent"; // Make sure this is the array of projects

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the index of the current project
  const scrollContainerRef = useRef(null);

  // Function to handle scrolling
  const handleScroll = (direction) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const scrollAmount = direction === "next" ? 300 : -300;
      scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    } 
  };

  // Handle "Next" and "Previous" button clicks
  const goToNextProject = () => {
    if (currentIndex < Projects.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to the first project if it's the last one
    }
  };

  const goToPreviousProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Projects.length - 1); // Go to the last project if it's the first one
    }
  };

  return (
    <div className="text-white p-2">
      <h1 className="text-center text-[#77b28c] text-6xl font-bold py-5">
        Project
      </h1>

      {/* Scroll Buttons */}

      {/* Project Cards - Only Display One */}
      <div
        ref={scrollContainerRef}
        className="w-full md:h-96 items-center flex justify-center overflow-x-auto scroll-smooth space-x-4 p-2"
      >
        <button
          onClick={goToPreviousProject}
          className="md:flex hidden  bg-[#77b28c] text-white px-4 py-2 rounded-full"
        >
          Previous
        </button>
        {/* Display the current project */}
        {Projects[currentIndex] && (
          <div className="w-[80%] h-full md:flex border-2 border-[#77b28c] p-2 rounded-lg md:p-0">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
              <button className="w-full h-full bg-[#77b28c] rounded-xl">
                <img
                  src={
                    Projects[currentIndex]?.image ||
                    "https://via.placeholder.com/300"
                  }
                  alt={Projects[currentIndex]?.name || "Project image"}
                  className=" h-48 w-full object-cover rounded-lg"
                />
              </button>
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 flex  justify-center items-center text-center px-5">
              <div>
                <h4 className="text-2xl font-bold">
                  {Projects[currentIndex]?.name}
                </h4>
                <p className="my-4 text-sm">
                  {Projects[currentIndex]?.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-5 flex w-full justify-center">
                  <button
                    onClick={() =>
                      window.location.replace(Projects[currentIndex]?.liveLink)
                    }
                    className="bg-[#77b28c] rounded-xl p-2 w-28"
                  >
                    Live
                  </button>

                  {Projects[currentIndex]?.sourseCode && (
                    <button
                      onClick={() =>
                        window.location.replace(
                          Projects[currentIndex]?.sourseCode
                        )
                      }
                      className=" bg-[#77b28c] rounded-xl p-2 w-28"
                    >
                      Source Code
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        <button
          onClick={goToNextProject}
          className="md:flex hidden  bg-[#77b28c] text-white px-4 py-2 rounded-full"
        >
          Next
        </button>
      </div>
      <div className="w-full md:hidden flex justify-around pt-5">
      <button
          onClick={goToPreviousProject}
          className="md:hidden flex  bg-[#77b28c] text-white px-4 py-2 rounded-full"
        >
          Previous
        </button>
        <button
          onClick={goToNextProject}
          className="md:hidden  flex  bg-[#77b28c] text-white px-4 py-2 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Project;
