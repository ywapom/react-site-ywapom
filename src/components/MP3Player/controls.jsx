import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Player.module.css"

function Controls(props) {
  return (
    <div className={styles.cplayercontrols}>
      <button className={styles.skipbtn} onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button
        className={styles.playbtn}
        onClick={() => props.setIsPlaying(!props.isPlaying)}
      >
        <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
      </button>
      <button className={styles.skipbtn} onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Controls;
