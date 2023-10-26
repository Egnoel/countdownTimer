/* eslint-disable no-unused-vars */
import { useState } from "react";
import facebook from "./assets/icon-facebook.svg";
import instagram from "./assets/icon-instagram.svg";
import pinterest from "./assets/icon-pinterest.svg";
import bgStars from "./assets/bg-stars.svg";
import patternHills from "./assets/pattern-hills.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-[#1D1E28] w-full sm:h-full min-h-screen relative">
      <div
        className=" flex flex-col w-full h-full min-h-screen items-center justify-center bg-[url('./assets/bg-stars.svg')]
      bg-cover bg-repeat relative"
      >
        <div className="flex flex-col ">
          <h1 className="text-5xl font-bold text-center text-white">
            We are launching soon
          </h1>
          <div className="flex flex-row items-center justify-center w-full gap-4 mt-5">
            <div className="relative flex flex-col gap-2">
              <div className="flex w-20 h-20 bg-[#343650] items-center justify-center">
                <span className="text-[#FB5E84] text-4xl">08</span>
                <hr className="border-solid border-black absolute top-[40%] w-full" />
                <span className="absolute rounded-full h-2 w-2 left-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1 bg-[#1D1E28]"></span>
                  <span className="flex-1"></span>
                </span>
                <span className="absolute rounded-full h-2 w-2 right-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1"></span>
                  <span className="flex-1 bg-[#1D1E28]"></span>
                </span>
              </div>
              <span className="text-[#8385A9] text-sm text-center">DAYS</span>
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="flex w-20 h-20 bg-[#343650] items-center justify-center">
                <span className="text-[#FB5E84] text-4xl">23</span>
                <hr className="border-solid border-black absolute top-[40%] w-full" />
                <span className="absolute rounded-full h-2 w-2 left-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1 bg-[#1D1E28]"></span>
                  <span className="flex-1"></span>
                </span>
                <span className="absolute rounded-full h-2 w-2 right-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1"></span>
                  <span className="flex-1 bg-[#1D1E28]"></span>
                </span>
              </div>
              <span className="text-[#8385A9] text-sm text-center">HOURS</span>
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="flex w-20 h-20 bg-[#343650] items-center justify-center">
                <span className="text-[#FB5E84] text-4xl">55</span>
                <hr className="border-solid border-black absolute top-[40%] w-full" />
                <span className="absolute rounded-full h-2 w-2 left-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1 bg-[#1D1E28]"></span>
                  <span className="flex-1"></span>
                </span>
                <span className="absolute rounded-full h-2 w-2 right-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1"></span>
                  <span className="flex-1 bg-[#1D1E28]"></span>
                </span>
              </div>
              <span className="text-[#8385A9] text-sm text-center">
                MINUTES
              </span>
            </div>
            <div className="relative flex flex-col gap-2">
              <div className="flex w-20 h-20 bg-[#343650] items-center justify-center">
                <span className="text-[#FB5E84] text-4xl">41</span>
                <hr className="border-solid border-black absolute top-[40%] w-full" />
                <span className="absolute rounded-full h-2 w-2 left-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1 bg-[#1D1E28]"></span>
                  <span className="flex-1"></span>
                </span>
                <span className="absolute rounded-full h-2 w-2 right-[-5px] bg-black top-[37%] flex flex-row">
                  <span className="flex-1"></span>
                  <span className="flex-1 bg-[#1D1E28]"></span>
                </span>
              </div>
              <span className="text-[#8385A9] text-sm text-center">
                SECONDS
              </span>
            </div>
          </div>
        </div>
        <div className="absolute z-10 flex flex-row gap-4 bottom-4 sm:bottom-[-70px]">
          <div className="w-4 h-4 icon_hover sm:w-8 sm:h-8">
            <img src={facebook} alt="" className="object-cover w-full h-full" />
          </div>
          <div className="w-4 h-4 icon_hover sm:w-8 sm:h-8 ">
            <img
              src={instagram}
              alt=""
              className="object-cover h-full w-fuul"
            />
          </div>
          <div className="w-4 h-4 icon_hover sm:w-8 sm:h-8">
            <img
              src={pinterest}
              alt=""
              className="object-cover h-full w-fuul"
            />
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-14">
          <img src={patternHills} alt="" className="object-cover w-full" />
        </div>
      </div>
    </div>
  );
}

export default App;
