import React from "react";
import YoutubeHeader from "./components/YoutubeHeader";
import VideoLists from "./components/VideoLists";
import styles from "./style/main.module.css";

function App() {
  return (
    <main className={styles.ytmain} >
      <YoutubeHeader />
      <VideoLists />
    </main>
  );
}

export default App;
