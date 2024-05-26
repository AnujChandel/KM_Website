import React, { useState, useEffect, useCallback } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import secondImage from "../Asset/imgslide.png";

export function Slides() {
  const slides = [
    {
      url: "https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_640.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    Aos.init({ duration: 2000 });
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="flex items-center justify-center relative">
      <figure className="relative lg:w-11/12 xl:w-9/12 transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 transform hover:scale-105">
        {/* Main Slide Image */}
        <img
          className="rounded-lg w-full md:max-w-full md:max-h-[25rem] lg:max-h-[30rem]"
          src={secondImage}
          alt="Laptop"
        />

        {/* Caption */}
        <figcaption className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 cursor-pointer hover:opacity-100">
          <p className="text-2xl lg:text-4xl text-white text-center font-thin text-gray-900">
            16 - 6 - 2024
          </p>
        </figcaption>

        {/* Second Image */}
        <img
          className="absolute bottom-[-5rem] left-[6rem] rounded-full h-[7rem] w-[7rem]"
          src={secondImage}
          alt="Laptop"
        />
      </figure>
    </div>
  );
}
