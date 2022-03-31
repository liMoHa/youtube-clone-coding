import React from "react";
import styles from "./videoDetails.module.css";

const VideoDetails = ({ video, isVideoClicked, isSubmitted }) => {
  const id = isVideoClicked && isSubmitted ? video.id.videoId : video.id;
  const title = isVideoClicked ? video.snippet.title : undefined;
  const channelTitle = isVideoClicked ? video.snippet.channelTitle : undefined;
  const description = isVideoClicked ? video.snippet.description : undefined;
  return (
    <article
      className={styles.videoDetails}
      style={{ display: isVideoClicked ? "flex" : "none" }}
    >
      <div className={styles.videoDetails__video}>
        <iframe
          height="315"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <section className={styles.videoDetails__section}>
        <h3 className={styles.videoDetails__title}>{title}</h3>
        <h4 className={styles.videoDetails__channelTitle}>
          {channelTitle}
        </h4>
        <p className={styles.videoDetails__description}>{description}</p>
      </section>
    </article>
  );
};

export default VideoDetails;
