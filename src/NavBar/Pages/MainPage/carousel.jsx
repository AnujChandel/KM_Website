import { useState, useEffect, useCallback } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export function Slides() {
  const slides = [
    {
      url: "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      url: "https://images.unsplash.com/photo-1510906594845-bc082582c8cc?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    Aos.init({ duration: 2000 });
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="container p-50 m-50">
      {" "}
      {/* Adjust padding/margin as needed */}
      <div
        className={` h-[20rem] relative group transition-all duration-150 flex items-center justify-center backdrop-brightness-0 shadow-2xl rounded-xl `}
        style={{ background: "#050506bf" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover object-cover duration-500 relative backdrop-blur-xl rounded-xl absolute top-0 left-0"
        />
        <img
          className="absolute bottom-[-5rem] left-10 h-[10rem] w-[10rem] rounded-full object-cover shadow-xl shadow-blue-gray-900/50"
          src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Laptop"
        />
      </div>
      
    </div>
  );
}
