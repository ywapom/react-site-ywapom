import React from "react";
import styles from "./Home.module.css";

const HomeOutro = () => {
  return (
    <React.Fragment>
      <div className={styles.p2}>
        <br />
        <p>Hear more compositions on the <a href={/musings/}>Musings</a> page.</p>
        <br />
      </div>
    </React.Fragment>
  );
};

export default HomeOutro;