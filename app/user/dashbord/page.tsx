"use client";

import { useState } from "react";
import type { CircularProgressbar as CircularProgressbarType, buildStyles as buildStylesType } from 'react-circular-progressbar';
const { CircularProgressbar, buildStyles } = require('react-circular-progressbar');
import "react-circular-progressbar/dist/styles.css";

export default function NewComponent() {
  const [percentage, setPercentage] = useState(65);

  return (
    <div className="flex flex-col font-sans max-w-[1200px] mx-auto p-4 sm:p-6 lg:p-8 rounded-2xl min-h-[400px] lg:min-h-[650px] bg-gray-100 w-full box-border overflow-hidden">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Top Section */}
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="relative bg-white border-2 border-black rounded-[34px] shadow-md p-8 text-center hover:border-orange-500">
              <h4 className="absolute -top-4 left-4 bg-white border-2 border-orange-400 rounded-md px-3 py-1 text-lg sm:text-xl text-gray-800">
                Questions of the day
              </h4>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap mt-6 -mx-4">
          {/* Left Column */}
          <div className="w-full md:w-1/2 px-4">
            <div className="relative bg-white border-2 border-black rounded-[34px] p-4 h-[180px] md:h-[200px] hover:border-orange-500">
              <h4 className="absolute -top-4 left-4 bg-white border-2 border-orange-400 rounded-md px-3 py-1 text-lg sm:text-xl text-gray-800">
                Events
              </h4>
              <div className="w-[96%] h-px bg-orange-400 my-4 mx-auto"></div>
              <div className="w-[90%] mx-auto bg-white border-2 border-black rounded-xl p-3">
                <p>This will include future events</p>
              </div>
            </div>

            <div className="relative bg-white border-2 border-black rounded-[34px] p-4 mt-6 h-[180px] md:h-[200px] hover:border-orange-500">
              <h4 className="absolute -top-4 left-4 bg-white border-2 border-orange-400 rounded-md px-3 py-1 text-lg sm:text-xl text-gray-800">
                News
              </h4>
              <div className="w-[96%] h-px bg-orange-400 my-4 mx-auto"></div>
              <div className="w-[90%] mx-auto bg-white border-2 border-black rounded-xl p-3"></div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-5/12 md:ml-[8.333%] px-4 mt-6 md:mt-0">
            <div className="relative bg-white border-2 border-black rounded-2xl shadow-md p-6 min-h-[390px] hover:border-orange-500">
              <div className="font-bold text-center text-gray-800 bg-white border-2 border-orange-400 rounded-md px-6 py-2 text-base sm:text-lg inline-block mb-4">
                Web Development Progress
              </div>
              <p className="text-lg sm:text-xl text-gray-800 mb-2 ml-4">
                Front-End Developer
              </p>
              <ul className="list-disc pl-10 ml-2 text-gray-800 text-sm sm:text-base">
                <li className="py-1">Basic Document Structure</li>
                <li className="py-1">Tags and Attributes</li>
                <li className="py-1">List</li>
              </ul>
              <div className="w-[90px] h-[90px] sm:w-[120px] sm:h-[120px] mx-auto mt-4">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                  styles={buildStyles({
                    textColor: "#333",
                    pathColor: "#ff6600",
                    trailColor: "#d6d6d6",
                    textSize: "16px",
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
