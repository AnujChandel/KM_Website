import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoContent from "../Videos/VideoContent";
import ReactPlayer from "react-player";

const MultiCardVideos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const playVideo = (item) => {
    window.scrollTo({ top: 480, behavior: "smooth" });
    setPlayingVideo("https://www.youtube.com/watch?v=" + item.id);
  };

 

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const cardStylevideos = {
    maxWidth: "300px",
    margin: "0 auto",
  };

  const lastFiveVideos = VideoContent[0]?.items.slice(-5);

  return (
    <>
      {playingVideo && (
        <div className=" max-w-7xl px-2 lg:px-0 mx-1000px ">
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
        </div>
      )}

      <Carousel
        swipeable={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
      >
        {lastFiveVideos.map((item, index) => (
          <div key={index} style={cardStylevideos}>
            <div
              className="max-w-sm rounded overflow-hidden shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                className="h-[200px] w-full rounded-lg object-cover cursor-pointer"
                src={item.snippet.thumbnails.high.url}
                alt="video-thumbnail"
                onClick={() => playVideo(item)}
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{item.snippet.title}</h1>
                <p className="mt-3 text-sm text-gray-600">
                  {item.snippet.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default MultiCardVideos;
