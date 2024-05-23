import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Slides } from "./carousel";
import MultiCardVideos from "./MultiCardVideos";
import MultiCardImages from "./MultiCardImages";
import Footer from "./Footer";

const MainPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    Aos.init({ duration: 2000 });
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Navbar with right positioning */}

        <div className="content flex flex-col gap-10">
          {" "}
          {/* Responsive content area */}
          <div className="w-full">
            <Slides />
          </div>
          <hr className="w-full h-px bg-black border-0 rounded-lg mt-14" />
          {/* ... your Video sections here ... */}
          <MultiCardVideos />
          <hr className="w-full h-px bg-black  rounded-lg my-4" />
          {/* ... your image sections here ... */}
          <MultiCardImages />
          <hr className="w-full h-px bg-black border-0 rounded-lg mt-4" />
          <Footer/>
        </div>
        {/* ... */}
      </div>
    </>
  );
};

export default MainPage;
