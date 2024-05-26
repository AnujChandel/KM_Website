import React, { useState, useCallback } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import VideoThumbnail from "../Videos/VideoContent";
import ImageViewer from "react-simple-image-viewer";

const MultiCardVideos = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

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
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const cardStylePhoto = {
    maxWidth: "300px",
    margin: "0 auto",
  };

  const lastEightThumbnails = VideoThumbnail[0]?.items.slice(-8); // Get the last 8 thumbnails

  return (
    <div className="relative">
      {isViewerOpen && (
        <ImageViewer
          src={lastEightThumbnails.map(
            (item) => item.snippet.thumbnails.high.url
          )}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          backgroundStyle={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            backgroundColor: "rgba(0, 0, 0, 0.8)", // Semi-transparent black overlay
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClose={closeImageViewer}
        />
      )}
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        responsive={responsive}
        infinite={true}
        customTransition="transform 500ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding"
      >
        {lastEightThumbnails.map((item, index) => (
          <div key={index} className="mx-auto" style={cardStylePhoto}>
            <div
              className="rounded overflow-hidden shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={item.snippet.thumbnails.high.url}
                onClick={() => openImageViewer(index)}
                width="300"
                className="w-full cursor-pointer"
                alt=""
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MultiCardVideos;
