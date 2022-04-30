import React, { useState, useEffect, useCallback } from "react";

import YoutubeHeader from "./components/video_header/YoutubeHeader";
import VideoList from "./components/video_list/VideoList";
import VideoDetails from "./components/video_details/VideoDetails";
import styles from "./app.module.css";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const search = useCallback(
    (query) => {
      youtube.search(query).then((items) => setVideos(items));
      setSelectedVideo(null);
    },
    [youtube]
  );

  const handleClickVideo = (video) => {
    setSelectedVideo(video);
  };

  useEffect(() => {
    youtube.mostPopular().then((items) => setVideos(items));
  }, [youtube]);
  return (
    <>
      <YoutubeHeader onSearch={search} />
      <section className={styles.container}>
        {selectedVideo && <VideoDetails video={selectedVideo} />}
        <VideoList
          videos={videos}
          onClickVideo={handleClickVideo}
          display={selectedVideo ? "list" : "grid"}
        />
      </section>
    </>
  );
}

export default App;
