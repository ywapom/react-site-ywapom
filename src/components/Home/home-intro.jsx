import React from "react";
import styles from "./Home.module.css";

const HomeIntro = () => {
  return (
    <React.Fragment>
      <div className={styles.intro}>
        <br />
        <p>
          “Music gives a soul to the universe, wings to the mind, flight to the
          imagination, and life to everything.” – Plato
        </p>
        <br />
      </div>
    </React.Fragment>
  );
};

export default HomeIntro;
