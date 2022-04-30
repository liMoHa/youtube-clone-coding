import React from "react";
import { memo } from "react/cjs/react.production.min";
import styles from "./videoItem.module.css";
const VideoItem = memo(({ video, video: { snippet }, onClickVideo }) => {
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
});
export default VideoItem;
