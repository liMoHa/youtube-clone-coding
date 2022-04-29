import React, { useState, useEffect } from "react";

import YoutubeHeader from "./components/video_header/YoutubeHeader";
import VideoList from "./components/video_list/VideoList";

function App({ youtube }) {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    youtube.mostPopular().then(items => setVideo(items));
  }, []);

  const search = (query) => {
    youtube.search(query).then(items => setVideo(items));
  };

  return (
    <>
      <YoutubeHeader onSearch={search} />
      <VideoList
        videoList={video}
      />
    </>
  );
}

export default App;
