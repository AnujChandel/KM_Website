import React, { useState, useCallback, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";

function Photos() {
  const { pathname } = useLocation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, [pathname]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  // Assuming PhotoCard is an array of objects with a 'url' property
  const PhotoCard = [
    {
      url: "https://plus.unsplash.com/premium_photo-1676637000058-96549206fe71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }, // Replace 'url1' with your actual URL
    {
      url: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }, // Replace 'url2' with your actual URL
    // Add more objects as needed
  ];

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PhotoCard.map((src, index) => (
            <div key={index} className="mx-auto w-[300px] rounded-md border">
              <img
                src={src.url}
                onClick={() => openImageViewer(index)}
                width="300"
                style={{ margin: "2px" }}
                alt=""
                data-aos="fade-up"
                data-aos-duration="1000"
              />
            </div>
          ))}
        </div>
        {isViewerOpen && (
          <ImageViewer
            src={PhotoCard.map((item) => item.url)}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            backgroundStyle={{
              padding: "20px",
              border: "2px solid black",
              backgroundColor: "rgba(0, 0,0, 0.8)",
              backdropFilter: "blur(8px)",

              margin: "auto", // Center the container
            }}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </>
  );
}

export default Photos;
