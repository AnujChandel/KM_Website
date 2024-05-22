import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import cardData from "./VideoContent";

function Videos() {
  const { pathname } = useLocation();
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        {/* <div className="mx-auto max-w-3xl md:text-center">
        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          People who made it successful
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis a vel error
          explicabo voluptatum nihil possimus veritatis eos culpa.
        </p>
      </div> */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: cardData.length }).map((_, i) => (
            <div
              key={i}
              className="mx-auto w-[300px] rounded-md border"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={cardData[i].url}
                alt="Laptop"
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{cardData[i].title}</h1>
                <p className="mt-3 text-sm text-gray-600">{cardData[i].des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Videos;
