import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoContent from "../Videos/VideoContent";

const MultiCardVideos = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const cardStylevideos = {
    maxWidth: "300px", // Set maximum width for the card
    margin: "0 auto", // Center the card horizontally
  };

  return (
    <div>
      <Carousel
        swipeable={true}
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
        {Array.from({ length: Math.min(5, VideoContent.length) }).map(
          (_, i) => {
            const index = VideoContent.length - 5 + i;
            return (
              <div key={index} style={cardStylevideos}>
                <div
                  className="max-w-sm rounded overflow-hidden shadow-xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    className="h-[200px] w-full rounded-lg object-cover"
                    src={VideoContent[index].url}
                    alt={VideoContent[index].title}
                  />
                  <div className="p-4">
                    <h1 className="text-lg font-semibold">
                      {VideoContent[index].title}
                    </h1>
                    <p className="mt-3 text-sm text-gray-600">
                      {VideoContent[index].des}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </Carousel>
    </div>
  );
};

export default MultiCardVideos;
