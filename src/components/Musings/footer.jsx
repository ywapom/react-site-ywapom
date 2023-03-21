import React, { Component } from "react";
import styles from "./Musings.module.css";

class MyFooter extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <a className={styles.a} href="mailto:rth333@gmail.com">
          Contact Me
        </a>
        <p className={styles.a}>
          All Rights to compositions, media, recordings or other creative
          content on this site belongs to its creator
        </p>
        <p className={styles.a}></p>
      </footer>
    );
  }
}

export default MyFooter;
