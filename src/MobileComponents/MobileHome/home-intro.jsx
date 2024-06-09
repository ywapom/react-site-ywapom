import React from "react";
import styles from "./Home.module.css";

const HomeIntro = () => {
  return (
    <React.Fragment>
      <div className={styles.intro}>
        <text>Home</text>
        <h3>
        “Inspiration does exist, but it must find you working.” —Pablo Picasso
        </h3>
        <br />
      </div>
    </React.Fragment>
  );
};

export default HomeIntro;
