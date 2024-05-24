import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PhotoContent from "../Photos/PhotosContent";

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

  const cardStylePhoto = {
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
        {Array.from({ length: Math.min(8, PhotoContent.length) }).map(
          (_, i) => {
            const index = PhotoContent.length - 8 + i;
            return (
              <div key={index} style={cardStylePhoto}>
                <div
                  className="max-w-sm rounded overflow-hidden shadow-2xl"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img
                    className="h-[200px] w-full rounded-lg shadow-2xl object-cover"
                    src={PhotoContent[index].url}
                    alt={PhotoContent[index].title}
                  />
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
