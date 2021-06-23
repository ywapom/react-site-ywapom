import React, { useState, useRef, useEffect } from "react";
import Controls from "./controls";
import Details from "./details";
import styles from "./Player.module.css"

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  return (
    <React.Fragment>
      <div className={styles.cplayer}>
        <h4 className={styles.cplayerh4}>Playing now</h4>
        <Details song={props.songs[props.currentSongIndex]} />
        <Controls
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          SkipSong={SkipSong}
        />
        <audio
          className={styles.cplayeraudio}
          src={props.songs[props.currentSongIndex].src}
          ref={audioEl}
          controls
          onEnded={SkipSong}
        ></audio>
        <p className={styles.cplayerp}>
          Next up:{" "}
          <span className={styles.cplayerspan}>
            {props.songs[props.nextSongIndex].title}
          </span>
        </p>
      </div>
    </React.Fragment>
    
  );
}

export default Player;
