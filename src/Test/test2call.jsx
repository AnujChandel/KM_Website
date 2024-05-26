import React from "react";
import test1 from "./test1";

const test2call = () => {
  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {test1.items.map((item, index) => (
          <div key={index} className="mx-auto w-[300px] rounded-md border">
            <img
              src={item.snippet.thumbnails.high.url} // Accessing the thumbnail URL here
              className="h-[200px] w-full rounded-lg bg-contain"
              alt="Video Thumbnail"
              data-aos="fade-up"
              data-aos-duration="1000"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default test2call;
