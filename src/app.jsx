import React, { useState } from "react";
import YoutubeHeader from "./components/YoutubeHeader";
import VideoDetails from "./components/VideoDetails";
import VideoLists from "./components/VideoLists";
import styles from "./style/app.module.css";

function App() {
  const [video, setVideo] = useState({});
  const [isVideoClicked, setVideoClicked] = useState(false);

  const handleSetVideo = (video) => {
    setVideo(video);
  };

  return (
    <>
      <YoutubeHeader />
      <main className={styles.videobox}>
        <VideoDetails video={video} isVideoClicked={isVideoClicked} />
        <VideoLists
          onClickVideo={handleSetVideo}
          isVideoClicked={isVideoClicked}
          setVideoClicked={setVideoClicked}
        />
      </main>
    </>
  );
}

export default App;
