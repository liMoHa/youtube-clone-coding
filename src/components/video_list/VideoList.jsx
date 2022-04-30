import React from "react";
import VideoItem from "../video_item/VideoItem";
import styles from "./videoList.module.css";

const VideoList = ({ videos, onClickVideo, display }) => {
  console.log("display", display);
  const displayType = display === "list" ? styles.list : styles.grid;
  return (
    <ul className={`${styles.videolist} ${displayType}`}>
      {videos.map((video) => {
        const key = video.snippet.channelId + video.snippet.title;
        return (
          <VideoItem key={key} video={video} onClickVideo={onClickVideo} />
        );
      })}
    </ul>
  );
};

export default VideoList;
