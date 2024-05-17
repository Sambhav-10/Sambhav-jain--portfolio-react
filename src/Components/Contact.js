import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-[40vh] flex justify-center items-center bg-[#77b28c] ">
      <div className="">
        <div className="w-full text-center">
      <p className="text-center text-white font-bold">Get In Toch</p>
          <h1 className="text-6xl font-bold">Contact Me</h1>
          <div className="flex gap-2 mt-10 border-4 border-black  rounded-2xl p-2 items-center">
            <button className="flex h-full items-center">
              <img
                width={50}
                src="https://www.sambhavjain.me/assets/email.png"
                alt=""
              />
              <p>sambhavseth9624@gmail.com</p>
            </button>
            <button className="flex h-full items-center">
              <img
              className=""
                width={40}
                src="https://www.sambhavjain.me/assets/linkedin.png"
                alt=""
              />
             
              
              <a href="">
                Linkedin
                </a> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
