import React, { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import VideoContent from "./VideoContent";

import ReactPlayer from "react-player/youtube";

function Videos() {
  const { videos } = VideoContent();
  const { pathname } = useLocation();
  const [playingVideo, setplayingVideo] = useState(
    "https://youtu.be/uHA198ce9YMhttps://youtu.be/n9TadzQb1Ec"
  );
  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, [pathname]);

  const playvideo = (i) => {
    scrollToTop();
    setplayingVideo(videos[i].url);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <>
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
          <div className="flex flex-row justify-center h-[calc(100%-56px)] bg-white dark:bg-black">
            <div className="w-full max-w-[1200px] flex flex-col lg:flex-row mx-auto ">
              <div className="flex flex-col lg:w-[calc(100%-300px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 ">
                <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 ">
                  <ReactPlayer
                    url={playingVideo}
                    controls
                    width="100%"
                    height="100%"
                    style={{ backgroundColor: "#000000" }}
                    playing={true}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: videos.length }).map((_, i) => (
              <div
                key={i}
                className="mx-auto w-[300px] rounded-md border"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={videos[i].imgurl}
                  alt="Laptop"
                  onClick={() => playvideo(i)}
                  className="h-[200px] w-full rounded-t-md object-cover"
                />
                <div className="p-4">
                  <h1 className="text-lg font-semibold">{videos[i].title}</h1>
                  <p className="mt-3 text-sm text-gray-600">{videos[i].des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
