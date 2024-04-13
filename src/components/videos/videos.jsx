import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import styles from "./videos.module.css"

const VISIT_VIDEO_PATH = 'https://s3.amazonaws.com/www.ywapom.com/vid/RH_visit_flim_mix.mp4';

function Videos() {
   const playerRef = useRef(null);
   return (
      <div className={styles.player}>
        <p>Ron Hermansen's filmscore for a powerfully emotive short film, "The Visit"</p>
         <ReactPlayer ref={playerRef} url={VISIT_VIDEO_PATH} controls={true} />
      </div>
   )
};
export default Videos;