import { useState } from "react";

function VideoContent() {
  const [videos, setVideos] = useState([
    {
      title: "The Shawshank Redemption",
      des: " 1994",
      url: "https://youtu.be/n9TadzQb1Ec",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      title: "The Godfather",
      des: " 1972",
      url: "https://youtu.be/UZ9h0BYC_sE",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      title: "The Dark Knight",
      des: " 2008",
      url: "https://youtu.be/GNoEwZ2-eME",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      title: "Schindler's List",
      des: " 1993",
      url: "https://youtu.be/kB1_mcTiOYs",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      title: "Pulp Fiction",
      des: " 1994",
      url: "https://youtu.be/kB1_mcTiOYs",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      title: "6",
      des: " 1993",
      url: "https://youtu.be/k-dcwB3qTMA",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
    {
      title: "7",
      des: " 1994",
      url: "https://youtu.be/_zDZYrIUgKE",
      imgurl:
        "https://static.vecteezy.com/system/resources/previews/002/475/549/non_2x/colorful-firework-background-free-vector.jpg",
    },
  ]);

  const addVideo = () => {
    // Create a new video object with dynamic data
    const newVideo = {
      title: "New Video",
      des: "Year",
      url: "https://example.com",
      imgurl: "https://example.com/image.jpg",
    };

    // Update state to include the new video
    setVideos([...videos, newVideo]);
  };

  const deleteVideo = (index) => {
    const updatedVideos = videos.filter((video, i) => i !== index);
    setVideos(updatedVideos);
  };
  return { videos, deleteVideo };
}
export default VideoContent;
