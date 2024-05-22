import React from "react";
import PhotoCard from "./PhotosContent";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Photos() {
  const { pathname } = useLocation();
  // Capitalized "P"
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className=" mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
          {Array.from({ length: PhotoCard.length }).map((_, i) => (
            <div key={i} className="mx-auto w-[300px] rounded-md border  ">
              <img
                src={PhotoCard[i].url}
                className="h-[200px] w-full rounded-lg bg-contain "
                alt="Laptop"
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Photos;
