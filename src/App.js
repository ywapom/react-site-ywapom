import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDrum,
  faAtom,
  faCircle,
  faBrain,
  faWind,
  faMountain,
  faMusic,
  faCat,
  faEye,
  faSignature,
  faHorseHead,
  faFistRaised,
  faWaveSquare,
  faHatWizard,
  faCoffee,
  faWater,
  faGem,
  faGrinSquint,
  faSkull,
  faLungsVirus,
  faVirusSlash,
  faBiohazard,
  faBurn,
  faCloud,
  faCloudMoon,
  faCrow,
  faDharmachakra,
  faDungeon,
  faSeedling,
  faSnowflake,
  faSpider,
  faUsers,
  faGuitar,
  faPlay,
  faPause,
  faStop,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

import Musings from "./components/Musings/musings";
import Home from "./components/Home/home";
import NavBar from "./components/Navbar/navbar";
import MP3Player from "./components/MP3Player/MP3Player";
import { FaFortAwesomeAlt } from "react-icons/fa";
//import styles from "./App.css";

library.add(
  faPlay,
  faPause,
  faStop,
  faForward,
  faBackward,
  faDrum,
  faAtom,
  faCircle,
  faBrain,
  faWind,
  faMountain,
  faMusic,
  faCat,
  faEye,
  faHorseHead,
  faFistRaised,
  faWaveSquare,
  faHatWizard,
  faCoffee,
  faWater,
  faSignature,
  faGem,
  faGrinSquint,
  faSkull,
  faLungsVirus,
  faVirusSlash,
  faBiohazard,
  faBurn,
  faCloud,
  faCloudMoon,
  faCrow,
  faDharmachakra,
  faDungeon,
  faSeedling,
  faSnowflake,
  faSpider,
  faUsers,
  faGuitar
);

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/musings" component={Musings} />
            <Route path="/MP3Player" component={MP3Player} />
          </Switch>{" "}
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;

