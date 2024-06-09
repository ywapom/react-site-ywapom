import ReactPlayer from 'react-player';
import React, { useState } from 'react';
import styles from "./videos.module.css"

// Define the playing property on HTMLMediaElement
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
   get: function() {
     return !!(!this.paused && !this.ended && this.readyState > 2);
   }
 });

const Videos = () => {
  const videosData = [
    {
      url: 'https://s3.amazonaws.com/www.ywapom.com/vid/RH_visit_flim_mix.mp4',
      title: 'The Visit',
      description: `An emotive short featuring Ron Hermansen's film score from FFSW`,
      id: 1,
    },
    {
      url: 'https://s3.amazonaws.com/www.ywapom.com/vid/non_profit.mp4',
      title: 'Non-profit',
      description: 'A Non-profit clip scored by Ron Hermansen',
      id: 2,
    },
    {
      url: 'https://s3.amazonaws.com/www.ywapom.com/vid/KFSS6.mp4',
      title: 'Kung Fu 6',
      description: `Master Eric's KFSS Workout #6`,
      id: 3,
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videosData[0]);

  const handleVideoChange = (video) => {
    setCurrentVideo(video);
  };

  return (
   <div className={styles.container}>
     <div className={styles.listContainer}>
       <ul className={styles.videoList}>
         {videosData.map((video) => (
           <li
             key={video.id}
             className={currentVideo.id === video.id ? styles.selected : ''}
             onClick={() => handleVideoChange(video)}
           >
             {video.title}
           </li>
         ))}
       </ul>
     </div>
     <div className={styles.description}>
       <p>{currentVideo.description}</p>
     </div>
     <div className={styles.playerContainer}>
      <div className={styles.playerWrapper}>
         <ReactPlayer url={currentVideo.url} controls playing={true} className={styles.reactPlayer} />
      </div>
     </div>
   </div>
 );
};

export default Videos;