import React from "react";
import HomeIntro from "./home-intro";
import styles from './Home.module.css';


const Home = () => {
  return (
    <>
      <HomeIntro />
      <div className={styles.div}>
        <p>What people have said:</p>
      </div>
      <div className={styles.div}>
          <p style={{ fontFamily: 'Cambria' }}>"...contributed greatly to the quality and supportability of our highly complex enterprise application suite."</p>
          <p style={{ fontSize: '12px' }}>-- Christopher Cambell, CEO at AssetSmart</p>
          <p style={{ fontFamily: 'Cambria' }}>"Ron is a highly intelligent, motivated, and creative problem solver... I have no hesitation in recommending him to anyone."</p>
          <p style={{ fontSize: '12px' }}>-- Richard Piedra, Director of Quality Assurance at Conduce</p>
          <p style={{ fontFamily: 'Cambria' }}>"...he excelled in writing automation and test tools to reduce testing time and increase coverage."</p>
          <p style={{ fontSize: '12px' }}>--Paul Davis, Director of Engineering at Rovi</p>
          <a href="https://www.linkedin.com/in/ron-hermansen-6b082011/">LinkedIn</a>
      </div>
      <br></br>
      <br></br>
      <div className={styles.div}>
        <p>Success at Meta:</p>
      </div>
      <div className={styles.div}>
        <img className={styles.img} src="../images/badges.png" alt=""/>
      </div>
      <div className={styles.div}>
        <br/>
        <p><a href ='mailto:rth333@gmail.com'>rth333@gmail.com</a></p>
      </div>
    </>
  );
};

export default Home;
