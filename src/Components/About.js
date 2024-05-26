import React from "react";
import Aboutme from "./about.jpg";
const About = () => {
  return (
    <div className="bg-black text-white border-t-4 rounded-full border-[#77b28c]">
      <p className="font-bold text-center text-4xl text- pt-10">About</p>
      <div className=" md:flex  w-full h-[100vh]">
        <div className=" md:w-1/2 ">
          <div className=" mt-5 md:w-full h-full flex justify-center items-center">
            <img
            
              width={500}
              height={400}
              className="rounded-2xl w-56"
              src={Aboutme}
              alt=""
            />
          </div>
        </div>
        <div className=" md:w-1/3 h-full flex md:items-center ">
          <div className="p-6 md:p-4">
            <h1 className=" text-6xl text-[#77b28c] font-bold  ">Sambhav jain</h1>
            <p className="mt-3 md:mt-4 text-center">
              {" "}
              Hey there, I'm Sambhav Jain, a frontend web developer passionate
              about crafting intuitive and impactful digital experiences. My
              journey began with a Bachelor's in Science, Over the past year,
              I've immersed myself in frontend technologies—HTML, CSS,
              Bootstrap, JavaScript, and React. Through numerous projects, I've
              honed my skills in creating responsive, user-centric designs that
              blend functionality with aesthetics.
            </p>

            <p className="md:mt-4 text-center">
              For me, web development isn't just about code; it's about crafting
              experiences that captivate and connect. I'm constantly driven to
              push boundaries, learn, and contribute to the ever-evolving world
              of web development{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
