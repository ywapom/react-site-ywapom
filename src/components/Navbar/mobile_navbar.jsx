// components/Navbar/mobile_navbar.js

import React, { Component } from "react";
import { FaAlignRight } from "react-icons/fa";
import "./navbar.module.css";

export default class MobileNavBar extends Component {
  state = {
    toggle: false,
  };
  Toggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const li = [
      // {
      //   link: "/",
      //   text: "Home",
      // },
      // {
      //   link: "/",
      //   text: "Resume",
      // },
      // {
      //   link: "/musings/",
      //   text: "Musings",
      // },
      // {
      //   link: "/mp3player/",
      //   text: "MP3-Player",
      // },
      // {
      //   link: "/chess/",
      //   text: "Chess",
      // },
      // {
      //   link: "/covid/",
      //   text: "Covid-19",
      // },
      // {
      //   link: "/games/",
      //   text: "Games",
      // },
      // {
      //   link: "/videos/",
      //   text: "Videos",
      // },
    ];

    return (
      <>
        <div className="navBar">
          <button onClick={this.Toggle}>
            <FaAlignRight />
          </button>
          <ul className={this.state.toggle ? "links show-nav" : "links"}>
            {li.map((objLink, i) => {
              return (
                <li key={objLink.text}>
                  <a href={objLink.link}>{objLink.text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}
