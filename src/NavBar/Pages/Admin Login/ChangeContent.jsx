import React, { useState } from "react";
import VideoContent from "../Videos/VideoContent";

function ChangeContent() {
  const [cardData, setCardData] = useState(VideoContent);

  const handleDeleteItem = (title) => {
    setCardData((prevCardData) =>
      prevCardData.filter((item) => item.title !== title)
    );
  };

  const replaceVideoContent = () => {
    setCardData((prevCardData) => {
      // Replace VideoContent with cardData
      VideoContent.splice(0, VideoContent.length, ...prevCardData);
      return [...prevCardData];
    });
  };

  return (
    <div className="mx-auto max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((item) => (
            <div
              key={item.title}
              className="mx-auto w-[300px] rounded-md border"
            >
              <img
                src={item.url}
                alt={item.title}
                className="h-[200px] w-full rounded-t-md object-cover"
              />
              <div className="p-4">
                <h1 className="text-lg font-semibold">{item.title}</h1>
                <p className="mt-3 text-sm text-gray-600">{item.des}</p>

                <button
                  type="button"
                  onClick={() => handleDeleteItem(item.title)}
                  className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={replaceVideoContent}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Replace Video Content
      </button>
    </div>
  );
}

export default ChangeContent;
