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
    title: " Latest work in progress:  Epic Sax",
    // composer: "R.T.H.",
    date: "2022",
    image: "moon-cloud",
    color: "red",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Sax.mp3",
    genre: { _id: "4", name: "Neo-classical" },
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
            <a className={styles.a} href={tune.link} target={"_blank"} rel="noreferrer">
              {" "}
              {tune.linkText}
            </a>
          </figcaption>
          <audio controls src={tune.url}></audio>
        </figure>
      </React.Fragment>
      <br></br>
      <HomeOutro></HomeOutro>
    </div>
  );
};

export default Home;
