import React, { useState, useEffect } from "react";
import axios from "axios";
import YoutubeHeader from "./components/video_header/YoutubeHeader";
import VideoList from "./components/video_list/VideoList";
import styles from "./app.module.css";

function App() {
  
  const [url, setUrl] = useState("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ");
  const [videoList, setVideoList] = useState([]);
  const [isVideoClicked, setVideoClicked] = useState(false);
  const [isSubmitted, setSubmitted] = useState(false); // video랑 search랑 id가 달라서 이를 구별하기 위해 필요
  const [clickedVideo, setClickedVideo] = useState({});
  
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        const video = response.data.items;
        setVideoList(video);
      })
      .catch((err) => console.log(err));
      
  },[url]);

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
        <VideoList
          videoList={videoList}
          clickedVideo={clickedVideo}
          onClickVideo={handleClickVideo}
          isVideoClicked={isVideoClicked}
          isSubmitted={isSubmitted}
        />
      </main>
    </>
  );
}

export default App;
