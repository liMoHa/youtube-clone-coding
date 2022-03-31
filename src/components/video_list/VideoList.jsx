import React from "react";
import VideoItem from "../video_item/VideoItem";
import VideoDetails from "../video_details/VideoDetails";
import styles from "./videoLists.module.css";

const VideoLists = ({
  videoList,
  clickedVideo,
  onClickVideo,
  isVideoClicked,
  isSubmitted,
}) => {
  return (
    <main className={styles.videobox}>
      <VideoDetails
        video={clickedVideo}
        isVideoClicked={isVideoClicked}
        isSubmitted={isSubmitted}
      />
      <ul
        className={styles.videolists}
        style={{
          gridTemplateColumns: isVideoClicked ? "1fr" : "1fr 1fr",
          padding: isVideoClicked ? "0" : "0 10px",
        }}
      >
        {videoList.map((video) => (
          <VideoItem
            key={
              isSubmitted
                ? video.id.videoId + `${video.snippet.title}`
                : video.id + `${video.snippet.title}`
            }
            onClickVideo={onClickVideo}
            video={video}
          />
        ))}
      </ul>
    </main>
  );
};

export default VideoLists;
