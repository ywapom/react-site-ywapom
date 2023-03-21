import React, { Component } from "react";
import styles from "./Musings.module.css";



class Intro extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={styles.intro}>
          <text>Musings</text>
          <h3>
            “Music produces a kind of pleasure which human nature cannot do
            without.” – Confucius
          </h3>
          <br></br>
        </div>
        <br></br>
      </React.Fragment>
    );
  }
}

export default Intro;
