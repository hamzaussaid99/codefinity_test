"use client";
import { intoLines } from "@/lib/config";
import { Typewriter } from "react-simple-typewriter";

const Intro = () => {
  return (
    <div className="relative w-full h-[500px] bg-cover bg-center bg-[url('/images/office.jpg')]">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl font-bold animate-pulse">
          <Typewriter
            words={intoLines}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
      </div>
    </div>
  );
};

export default Intro;
