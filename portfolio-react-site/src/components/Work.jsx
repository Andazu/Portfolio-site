import React from "react";
import sw6 from "../assets/ekstrabladet.png";
import sw5 from "../assets/educado.png";
import sw4 from "../assets/6502.jpg";
import sw3 from "../assets/livingroom.png";
import sw2 from "../assets/sw2.png";
import sw1 from "../assets/sw2.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/custom-carousel.css"; // Assuming you add the CSS here

const items = [
  {
    title: "Project 1",
    image: sw1,
    description: "This is the description for Project 1.",
  },
  {
    title: "Project 2",
    image: sw2,
    description: "This is the description for Project 2.",
  },
  {
    title: "Project 3",
    image: sw3,
    description: "This is the description for Project 3.",
  },
  {
    title: "Project 4",
    image: sw4,
    description: "This is the description for Project 4.",
  },
  {
    title: "Project 5",
    image: sw5,
    description: "This is the description for Project 5.",
  },
  {
    title: "Project 6",
    image: sw6,
    description: "This is the description for Project 6.",
  },
];

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] pt-[80%] sm:pt-40 md:pt-80 lg:pt-[35%]"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#72DE6A]">
            Work
          </p>
          <p className="py-6">
            Check out the projects I have participated in during my time at
            Aalborg University
          </p>
        </div>

        {/* Carousel container*/}
        <div className="max-w-[1000px] mx-auto justify-center w-full h-full">
          {/* Carousel component */}
          <div>
            <Carousel infiniteLoop>
              {items.map(({ title, image, description }, index) => (
                <div key={index} className="slide flex flex-col h-full">
                  <div className="w-full">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#72DE6A]">
                      {title}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between items-center h-[60vh] px-10">
                    <img src={image} className="max-w-sm" />
                    <p className="text-center">{description}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
