import React from "react";
import styles from "./videoDetails.module.css";

const VideoDetails = ({ video, isVideoClicked }) => {
  return (
    <article
      className={styles.videoDetails}
      style={{ display: isVideoClicked ? "flex" : "none" }}
    >
      <div className={styles.videoDetails__video}>
        <iframe
          // width="600"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <section className={styles.videoDetails__section}>
        <h3 className={styles.videoDetails__title}>{video.title}</h3>
        <h4 className={styles.videoDetails__channelTitle}>
          {video.channelTitle}
        </h4>
        <p className={styles.videoDetails__description}>{video.description}</p>
      </section>
    </article>
  );
};

export default VideoDetails;
