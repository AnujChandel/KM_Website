import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import Aos from "aos";
import "aos/dist/aos.css";
import VideoContent from "./VideoContent";

function Videos() {
  const { pathname } = useLocation();
  const [playingVideo, setPlayingVideo] = useState(
    "https://youtu.be/MvYApd_X3aU"
  );

  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0); // Scroll to top when pathname changes
  }, [pathname]);

  const playVideo = (item) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top before changing video
    setPlayingVideo(`https://www.youtube.com/watch?v=${item.id}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="flex flex-row justify-center h-[calc(100%-560px)] bg-white dark:bg-black">
        <div className="w-full max-w-[1200px] flex flex-col lg:flex-row mx-auto ">
          <div
            className="flex flex-col lg:w-[calc(100%-300px)] xl:w-[calc(100%-00px)] px-4 py-3 lg:py-6 rounded-lg"
            style={{
              backgroundImage:
                'url("https://wallpapers.com/images/high/abstract-white-screen-background-r05pfz81dknpaxu2.webp")',
            }}
          >
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0 ">
              <ReactPlayer
                className="rounded-2xl"
                url={playingVideo}
                controls
                width="100%"
                height="100%"
                loop={true}
                playing={true}
                playsinline={true}
                style={{ backgroundColor: "#000000" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {VideoContent[0]?.items.map((item, index) => (
          <div
            key={index}
            className="mx-auto w-[300px] rounded-md border"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src={item.snippet.thumbnails.high.url}
              alt="Laptop"
              onClick={() => playVideo(item)}
              className="h-[200px] w-full rounded-t-md object-cover cursor-pointer"
            />
            <div className="p-4">
              <h1 className="text-lg font-semibold">{item.snippet.title}</h1>
              <p className="mt-3 text-sm text-gray-600">{item.snippet.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
