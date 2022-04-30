import React from "react";
import styles from "./videoItem.module.css";
const VideoItem = ({ video, video: { snippet }, onClickVideo }) => {
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const thumbnail = snippet.thumbnails.medium.url;

  return (
    <li className={styles.video} onClick={() => onClickVideo(video)}>
      <div className={styles.thumbnail}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={styles.info}>
        <p>{title}</p>
        <p>{channelTitle}</p>
      </div>
    </li>
  );
};
export default VideoItem;
