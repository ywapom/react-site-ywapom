import React from "react";

// import Advice from "../Advice/advice";
// import Weather from "../Weather/weather";
import styles from "./Home.module.css";
import HomeIntro from "./home-intro";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomeOutro from './home-outro';




const Home = () => {
  const tune = {
    _id: "00",
    title: " Latest work in progress:",
    // composer: "R.T.H.",
    date: "2021",
    image: "cat",
    color: "blue",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/somber_mist.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  };

  const tune2 = {
    _id: "01",
    title: " A version with string orchestration:",
    // composer: "R.T.H.",
    date: "2021",
    image: "mountain",
    color: "green",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/somber_strings.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  };

  return (
    <div>
      <HomeIntro />
      <br></br>
      <React.Fragment key={tune._id}>
        <figure>
          <figcaption className={styles.figcaption}>
            <p className={styles.p2}>{tune.title}</p>
            <i style={{ color: tune.color }} aria-hidden="true">
              {" "}
              <FontAwesomeIcon icon={tune.image} />
            </i>
            {/* <p className={styles.p}>by {tune.composer}</p> */}
            <a className={styles.a} href={tune.link} target={"_blank"}>
              {" "}
              {tune.linkText}
            </a>
          </figcaption>
          <audio controls src={tune.url}></audio>
        </figure>
      </React.Fragment>
      <br></br>
      <React.Fragment key={tune2._id}>
        <figure>
          <figcaption className={styles.figcaption}>
            <p className={styles.p2}>{tune2.title}</p>
            <i style={{ color: tune2.color }} aria-hidden="true">
              {" "}
              <FontAwesomeIcon icon={tune2.image} />
            </i>
            {/* <p className={styles.p}>by {tune.composer}</p> */}
            <a className={styles.a} href={tune2.link} target={"_blank"}>
              {" "}
              {tune2.linkText}
            </a>
          </figcaption>
          <audio controls src={tune2.url}></audio>
        </figure>
        </React.Fragment>
        <br></br>
        <HomeOutro></HomeOutro>
    </div>
  );
};

export default Home;
