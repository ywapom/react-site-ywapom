import React from "react";
import HomeIntro from "./home-intro";
import styles from './Home.module.css';


const Home = () => {
  return (
    <>
      <HomeIntro />
      <br></br>
      <div className={styles.wrapper}>
        <div className={styles.one}>
        <p className={styles.p1}>
          Ron Hermansen...
        </p>
        <p className={styles.p2}>
          A developer<br/>
          A father of two great boys<br/>
          Pursues mindfulness<br/>
          ~<br/>
          Sometimes I compose<br/>
          Sometimes notes flow from elsewhere<br/>
          Mysterious life<br/>
          ~<br/>
          Looking for a job<br/>
          What will the next challenge bring<br/>
          Never stop learning<br/>
        </p>
        </div>
        <div className={styles.two}>
        <p className={styles.p3}>Thank you for visiting my site!</p>  
        <p className={styles.p}>
              I made this site with React.<br/><br/>
              A few carreer highlights can be seen in the Resume page.<br/><br/>
              Music hobby items can be heard in Musings and the Player pages.<br/><br/>
              Chess is under construction but links to a few historical games.
            </p>
        </div>
        <div className={styles.three}>
          <br/>
          <p>Contact information:</p>
          <p><a href ='mailto:rth333@gmail.com'>rth333@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/ron-hermansen-6b082011/">LinkedIn</a></p>
        </div>
      </div>
    </>
  );
};

export default Home;
