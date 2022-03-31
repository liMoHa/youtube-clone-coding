import React, { useState } from "react";
import YoutubeHeader from "./components/video_header/YoutubeHeader";
import VideoDetails from "./components/video_details/VideoDetails";
import VideoList from "./components/video_list/VideoList";
import styles from "./app.module.css";

function App() {
  const [clickedVideo, setClickedVideo] = useState({});
  const [isVideoClicked, setVideoClicked] = useState(false);
  //  "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ"
  const [url, setUrl] = useState("");
  const [isSubmitted, setSubmitted] = useState(false); // video랑 search랑 id가 달라서 이를 구별하기 위해 필요

  const handleGetSrc = (keyword) => {
    // keyword만 prop으로 주는 게 좋을까..?
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ`;
    setUrl(url);
    setSubmitted(true);
    setVideoClicked(false);
  };

  const handleClickVideo = (video) => {
    // 바로 상태를 내려주는 건 좋지 않은 방법일까?
    setClickedVideo(video);
    setVideoClicked(true);
  };

  return (
    <>
      <YoutubeHeader onSubmitValue={handleGetSrc} />
      <main className={styles.videobox}>
        <VideoDetails video={clickedVideo} isVideoClicked={isVideoClicked} isSubmitted={isSubmitted}/>
        <VideoList
          isVideoClicked={isVideoClicked}
          onClickVideo={handleClickVideo}
          url={url}
          isSubmitted={isSubmitted}
        />
      </main>
    </>
  );
}

export default App;
