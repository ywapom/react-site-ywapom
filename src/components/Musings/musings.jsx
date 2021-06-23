import React, { Component } from "react";
import { getTunes } from "../../services/tunesService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HorzListGroup from "../common/HorzListGroup";
import { getGenres } from "../../services/genreService";
import Intro from "./intro";
import MyFooter from "./footer";
import styles from "./Musings.module.css";



class Musings extends Component {
  state = {
    tunes: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };
  
  componentDidMount() {
    const genres = [{ name: "ALL" }, ...getGenres()];

    this.setState({ tunes: getTunes(), genres });
  }

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre });
  };

  render() {
    //const { length: count } = this.state.tunes;
    const { selectedGenre, tunes: allTunes } = this.state;

    const filtered = selectedGenre && selectedGenre._id
      ? allTunes.filter((t) => t.genre._id === selectedGenre._id)
      : allTunes;

    return (
      <React.Fragment>
        <Intro />
        <div>
          <HorzListGroup
            key={this.key}
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
          <br></br>
        </div>
        {filtered.map((tune) => (
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
            <br></br>
          </React.Fragment>
        ))}     
        <MyFooter />
      </React.Fragment>
    );
  }
}

export default Musings;
