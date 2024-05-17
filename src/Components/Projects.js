import React, { useState } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      heading: "Nature's Beauty",
      description:
        "Explore the stunning beauty of nature with this collection of landscape photographs.",
      tagline: "Experience the tranquility of untouched landscapes.",
      imgUrl:
        "https://images.pexels.com/photos/18156147/pexels-photo-18156147/free-photo-of-woman-wearing-wedding-dress-sitting-on-concrete-block.jpeg",
    },
    {
      id: 2,
      heading: "Abstract Artistry",
      description:
        "Dive into the world of abstract art with these vibrant and expressive paintings.",
      tagline: "Unleash your imagination.",
      imgUrl:
        "https://images.pexels.com/photos/10139619/pexels-photo-10139619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      heading: "Urban Exploration",
      description:
        "Discover the hidden gems of city life through these urban photography series.",
      tagline: "Capture the essence of bustling streets.",
      imgUrl:
        "https://images.pexels.com/photos/14894306/pexels-photo-14894306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      heading: "Blue House with Pink Blossoms",
      description:
        "A beautiful blue house adorned with pink blossoms on the roof.",
      tagline: "Colorful and picturesque architecture.",
      imgUrl:
        "https://images.pexels.com/photos/20780434/pexels-photo-20780434/free-photo-of-a-blue-house-with-pink-blossoms-on-the-roof.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];

  const [show, Setshow] = useState(false);
  function change(id) {
    Setshow(!show);
  }
  return (
    <>
      <div className="w-full bg-slate-400 h-[100vh] flex items-center">
        <div className="justify-around w-full h-full items-center">
          {projects.map(({ id, heading, description, tagline, imgUrl }) => {
            return (
              <>
                <div
                  className="flex justify-around w-full h-full items-center"
                  key={id}
                >
                  <div className="">
                    <img
                      className="hover:w-56"
                      onClick={() => change(id)}
                      src={imgUrl}
                      alt=""
                      width={200}
                      height={200}
                    />
                  </div>

                  <div className={show === true ? "hidden" : "block"}>
                    <p>{tagline}</p>
                    <h2>{heading}</h2>
                    <p>{description}</p>
                    <button>Button</button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
