import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "../style/videoLists.module.css";

const VideoLists = () => {
  const [videoLists, setVideoLists] = useState([]);

  useEffect(() => {
    // fetch로도 해볼까
    axios
      .get(
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBiq5tTOVn2WDiVirL485vGoPPZCmbbvZQ"
      )
      .then((response) => {
        const videoLists = response.data.items.map((item) => {
          return (
            <li className={styles.videolists__list} key={item.id}>
              {/* div에 background-img로 넣는 거랑 img로 넣는 거 상황 구분? */}
              <div className={styles.list__thumbnail}>
                <img
                  src={item.snippet.thumbnails.default.url}
                  alt="thumbnail"
                />
              </div>
              <div className={styles.list__info}>
                {/* 여기 무슨 태그로 했을까? */}
                <span>{item.snippet.title}</span>
                <span>{item.snippet.channelTitle}</span>
              </div>
            </li>
          );
        });
        setVideoLists(videoLists);
      })
      .catch((err) => console.log(err));
  }, []);

  return <ul className={styles.videolists}>{videoLists}</ul>;
};

export default VideoLists;

{
  /* <iframe
  width="560"
  height="315"
  src={`https://www.youtube.com/embed/${item.id}`}
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>; */
}
