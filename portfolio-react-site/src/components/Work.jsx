import React from "react";
import sw6 from "../assets/sw6.png";
import sw5 from "../assets/sw5.png";
import sw4 from "../assets/sw4.png";
import sw3 from "../assets/sw3.png";
import sw2 from "../assets/sw2.png";
import sw1 from "../assets/sw1.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full h-auto text-gray-300 bg-[#0a192f] pt-[80%] sm:pt-40 md:pt-80 lg:pt-[35%]"
    >
      {/* Container */}
      <div className="mx-auto p-4 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#72DE6A] max-w-[85px]">
            Work
          </p>
          <p className="py-6">
            Check out the projects I have participated in during my time at
            Aalborg University
          </p>
        </div>

        {/* Project 6*/}
        <div className="justify-center w-full h-full pt-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="slide flex flex-col h-full py-6">
              <div className="w-full">
                <p className="text-4xl font-bold text-center text-gray-300">
                  Ekstra Bladet Recommender Project
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center h-[45vh] px-24">
                <img
                  src={sw6}
                  className="max-h-[35svh] object-cover hover:scale-105 duration-500 rounded-md"
                />
                <div className="flex flex-col text-left pl-12 w-1/2 max-h-72">
                  <p className="border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]">
                    Spring 2024
                  </p>
                  <p className="pt-6">
                    Enhanced the user experience and improved user engagement on
                    Ekstra Bladetʼs mobile application by developing a highly
                    modular software system that supports a
                    machine‑learning‑based recommender model. Provided a
                    complete system and displayed a personalised news feed to
                    users on an overhauled mobile application.
                  </p>
                  <div className="flex flex-row p-8 justify-center w-full h-full space-x-20">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Documentation
                    </button>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 5 */}
            <div className="slide flex flex-col h-full py-6">
              <div className="w-full">
                <p className="text-4xl font-bold text-center text-gray-300">
                  The Educado Initiative
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center h-[45vh] px-24">
                <img
                  src={sw5}
                  className="max-h-[35svh] object-cover hover:scale-105 duration-500 rounded-md"
                />
                <div className="flex flex-col text-left pl-12 w-1/2 max-h-72">
                  <p className="border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]">
                    Fall 2023
                  </p>
                  <p className="pt-6">
                    Further developed on a educational mobile platform, created
                    in a collaboration between Aalborg University and the
                    University of Brasília, supported by Erasmus. The project
                    aimed to develop a mobile platform that prvoided a
                    socially-gamified educational experience for waste pickers
                    in Brazil. The project is now in consideration to be funded
                    by the United Nations Development Programme (UNDP).
                  </p>
                  <div className="flex flex-row p-8 justify-center w-full h-full space-x-20">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Documentation
                    </button>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 4 */}
            <div className="slide flex flex-col h-full py-6">
              <div className="w-full">
                <p className="text-4xl font-bold text-center text-gray-300">
                  Language Development, Assembly 6502
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center h-[45vh] px-24">
                <img
                  src={sw4}
                  className="max-h-[35svh] object-cover hover:scale-105 duration-500 rounded-md"
                />
                <div className="flex flex-col text-left pl-12 w-1/2 max-h-72">
                  <p className="border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]">
                    Spring 2023
                  </p>
                  <p className="pt-6">
                    Designed and implemented an imperative language for the MOS
                    6502 processor. Constructed a compiler that compiled our own
                    language into Assembly 6502. The language incorporates
                    features such as variables, procedures, loops, and
                    conditionals. The compiler includes crucial phases of a
                    traditional compiler such as lexical analysis, syntax
                    analysis, semantic analysis, and code generation.
                  </p>
                  <div className="flex flex-row p-8 justify-center w-full h-full space-x-20">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Documentation
                    </button>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 3 */}
            <div className="slide flex flex-col h-full py-6">
              <div className="w-full">
                <p className="text-4xl font-bold text-center text-gray-300">
                  Task Management Software Solution
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center h-[45vh] px-24">
                <img
                  src={sw3}
                  className="max-h-[35svh] object-cover hover:scale-105 duration-500 rounded-md"
                />
                <div className="flex flex-col text-left pl-12 w-1/2 max-h-72">
                  <p className="border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]">
                    Fall 2022
                  </p>
                  <p className="pt-6">
                    Collaborated with The Living Room to formulate requirements
                    and model their problem domain (i.e., UML). Developed an
                    object‑oriented solution to optimize their task management.
                    The application is primarily written in Java and relies on a
                    MongoDB database.
                  </p>
                  <div className="flex flex-row p-8 justify-center w-full h-full space-x-20">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Documentation
                    </button>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 2 */}
            <div className="slide flex flex-col h-full py-6">
              <div className="w-full">
                <p className="text-4xl font-bold text-center text-gray-300">
                  Smart Device Management
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center h-[45vh] px-24">
                <img
                  src={sw2}
                  className="max-h-[28svh] object-cover hover:scale-105 duration-500 rounded-md"
                />
                <div className="flex flex-col text-left pl-12 w-1/2 max-h-72">
                  <p className="border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]">
                    Spring 2022
                  </p>
                  <p className="pt-6">
                    Created a proof of concept for a web page, which was a
                    management platform that was designed to allow the
                    simulation of several different, otherwise unrelated smart
                    devices bei ng managed and controlled from one central
                    location while providi ng relevant information
                  </p>
                  <div className="flex flex-row p-8 justify-center w-full h-full space-x-20">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Documentation
                    </button>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Project 1 */}
            <div className="slide flex flex-col h-full py-6">
              <div className="w-full">
                <p className="text-4xl font-bold text-center text-gray-300">
                  A digital fridge and recipe generator written in C
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center h-[45vh] px-24">
                <img
                  src={sw1}
                  className="max-h-[35svh] object-cover hover:scale-105 duration-500 rounded-md"
                />
                <div className="flex flex-col text-left pl-12 w-1/2 max-h-72">
                  <p className="border-l-4 pl-2 text-2xl font-bold text-gray-300 border-[#72DE6A]">
                    Fall 2021
                  </p>
                  <p className="pt-6">
                    This product runs as a command-line application, storing the
                    users ingredients locally and using to generate recipes in
                    order to reduce their waste of food.
                  </p>
                  <div className="flex flex-row p-8 justify-center w-full h-full space-x-20">
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Documentation
                    </button>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#4B9146] border-[#4B9146] duration-300">
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
