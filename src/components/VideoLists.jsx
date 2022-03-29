import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style/videoLists.module.css";

const VideoLists = ({
  onClickVideo,
  isVideoClicked,
  setVideoClicked,
  url,
  isSubmitted,
}) => {
  const [videoLists, setVideoLists] = useState([]);

  const currentUrl = isSubmitted
    ? url
    : "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ";
  const onClick = (videoInfo) => {
    onClickVideo(videoInfo);
    // 바로 상태를 내려주는 건 좋지 않은 방법일까?
    setVideoClicked(true);
  };

  useEffect(() => {
    // fetch로도 해볼까
    axios
      .get(currentUrl)
      .then((response) => {
        const videoLists = response.data.items.map((item, i) => {
          const id = isSubmitted ? item.id.videoId : item.id;
          const title = item.snippet.title;
          const channelTitle = item.snippet.channelTitle;
          const thumbnail = item.snippet.thumbnails.default.url;
          const description = item.snippet.description;
          const key = item.snippet.channelId+title;

          return (
            <li
              className={styles.videolists__list}
              key={key}
              onClick={() => onClick({ id, title, channelTitle, description })}
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
        });
        setVideoLists(videoLists);
      })
      .catch((err) => console.log(err));
  }, [currentUrl]);

  return (
    <ul
      className={styles.videolists}
      style={{
        gridTemplateColumns: isVideoClicked ? "1fr" : "1fr 1fr",
        padding: isVideoClicked ? "0" : "0 10px",
      }}
    >
      {videoLists}
    </ul>
  );
};

export default VideoLists;
