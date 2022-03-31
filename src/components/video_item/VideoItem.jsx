import React from "react";
import styles from "./videoItem.module.css";

const VideoItem = ({video, onClickVideo}) => {
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const thumbnail = video.snippet.thumbnails.medium.url;
  
  const onClick = () => {
    onClickVideo(video);
  }
  return (
    <li
      onClick={onClick}
      className={styles.videolists__list}
    >
      <div className={styles.list__thumbnail}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={styles.list__info}>
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </li>
  );
};
export default VideoItem;
