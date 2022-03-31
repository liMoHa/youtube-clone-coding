import React, { useState, useEffect } from "react";
import axios from "axios";
import VideoItem from "../video_item/VideoItem";
import styles from "./videoLists.module.css";

const VideoLists = ({
  onClickVideo,
  isVideoClicked,
  isSubmitted,
  url,
}) => {
  const [videoLists, setVideoLists] = useState([]);
  const currentUrl = isSubmitted
    ? url
    : "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ";

  useEffect(() => {
    axios
      .get(currentUrl)
      .then((response) => {
        const video = response.data.items;
        setVideoLists(video);
      })
      .catch((err) => console.log(err));
      
  },[currentUrl]);

  return (
    <ul
      className={styles.videolists}
      style={{
        gridTemplateColumns: isVideoClicked ? "1fr" : "1fr 1fr",
        padding: isVideoClicked ? "0" : "0 10px",
      }}
    >
      {videoLists.map((video) => (
        <VideoItem
          key={isSubmitted ? video.id.videoId+`${video.snippet.title}` : video.id+`${video.snippet.title}`}
          onClickVideo={onClickVideo}
          video={video}
        />
      ))}
    </ul>
  );
};

export default VideoLists;
