import React from "react";
import styles from "./videoItem.module.css";

const VideoItem = ({video, onClickVideo}) => {
  const title = video.snippet.title;
  const channelTitle = video.snippet.channelTitle;
  const thumbnail = video.snippet.thumbnails.medium.url;
  const key = video.snippet.channelId + title;
  
  const onClick = () => {
    onClickVideo(video);
  }
  return (
    <li
      onClick={onClick}
      className={styles.videolists__list}
      key={key}
    >
      {/* div에 background-img로 넣는 거랑 img로 넣는 거 상황 구분? */}
      <div className={styles.list__thumbnail}>
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={styles.list__info}>
        {/* 여기 무슨 태그로 했을까? */}
        <span>{title}</span>
        <span>{channelTitle}</span>
      </div>
    </li>
  );
};
export default VideoItem;
