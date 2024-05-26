import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoContent from "../Videos/VideoContent";
import ReactPlayer from "react-player";

const MultiCardVideos = () => {
  const [playingVideo, setPlayingVideo] = useState(null);

  const playVideo = (item) => {
    setPlayingVideo("https://www.youtube.com/watch?v=" + item.id);
  };

  const closePlayer = () => {
    setPlayingVideo(null);
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
      <div>
        <div className="my-4">
          {playingVideo && (
            <div className="my-5 relative" style={{ paddingTop: "50%" }}>
              <div className="absolute inset-0">
                <ReactPlayer
                  className="rounded-2xl mx-auto p-auto pb-2 pt-2"
                  url={playingVideo}
                  controls
                  loop={true}
                  playing={true}
                  playsinline={true}
                  style={{ backgroundColor: "#000000" }}
                  onClick={closePlayer}
                  width="100%"
                  height="100%"
                />
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
                    <h1 className="text-lg font-semibold">
                      {item.snippet.title}
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      {item.snippet.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default MultiCardVideos;
