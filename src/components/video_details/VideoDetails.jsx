import React from "react";
import styles from "./videoDetails.module.css";

const VideoDetails = ({ video, video: { snippet } }) => {
  const id = video.id;
  const title = snippet.title;
  const channelTitle = snippet.channelTitle;
  const description = snippet.description;

  return (
    <section className={styles.videoDetails}>
      <iframe
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <h3>{title}</h3>
      <h4>{channelTitle}</h4>
      <pre className={styles.description}>{description}</pre>
    </section>
  );
};

export default VideoDetails;
