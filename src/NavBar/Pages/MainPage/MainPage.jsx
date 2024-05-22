import React from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { Slides } from "./carousel";

const MainPage = () => {
  const { pathname } = useLocation();
  const images = Array(8).fill(null);
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <div>
        <div className="mx-[10rem] max-w-7xl px-2 lg:px-0 ">
          <div className=" mx-auto max-w-7xl px-2 lg:px-0"></div>
          <Slides />
        </div>
        <hr class="w-[10rem]  h-1 mx-auto  bg-black border-0 rounded  mt-[5rem] " />
        <div className="mt-[5rem] grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/** */}
        </div>
      </div>
      <div>
        <div className="mx-[4rem] my-[3rem]  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/** 1 */} {/** from */}{" "}
          {images.map((_, index) => (
            <div
              className="mx-auto w-[300px] rounded-lg shadow-md border"
              key={index}
              data-aos="fade-down-right"
              data-aos-duration="1000"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg"
                alt="Laptop"
                className="h-[200px]  w-full rounded-t-md object-cover shadow-md"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">Name</h1>
                <p className="mt-3 text-sm text-gray-600">desc</p>
              </div>
            </div>
          ))}
        </div>
        <hr class="w-[10rem]  h-1 mx-auto  bg-black border-0 rounded  my-[5rem] " />

        {/** images from here */}
        <div className="mx-[4rem] my-[3rem]  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/** 1 */}{" "}
          {images.map((_, index) => (
            <div
              key={index} // Important for performance with repeated elements
              className="mx-auto w-[300px] rounded-md border"
              data-aos="fade-up-left"
              data-aos-duration="1000"
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg"
                alt="Laptop"
                className="h-[200px] w-full rounded-lg bg-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainPage;
