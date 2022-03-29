import React, { useState } from "react";
import YoutubeHeader from "./components/YoutubeHeader";
import VideoDetails from "./components/VideoDetails";
import VideoLists from "./components/VideoLists";
import styles from "./style/app.module.css";

function App() {
  const [video, setVideo] = useState({});
  const [isVideoClicked, setVideoClicked] = useState(false);
  const [url, setUrl] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);

  const handleSetVideo = (video) => {
    setVideo(video);
  };

  const handleGetSrc = (keyword) => {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ`;
    setUrl(url);
    setSubmitted(true);
    setVideoClicked(false);
  };


  return (
    <>
      <YoutubeHeader onSubmitValue={handleGetSrc} />
      <main className={styles.videobox}>
        <VideoDetails video={video} isVideoClicked={isVideoClicked} />
        <VideoLists
          onClickVideo={handleSetVideo}
          isVideoClicked={isVideoClicked}
          setVideoClicked={setVideoClicked}
          url={url}
          isSubmitted={isSubmitted}
        />
      </main>
    </>
  );
}

export default App;
