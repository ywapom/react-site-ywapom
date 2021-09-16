import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAllergies,
  faAtom,
  faBackward,
  faBacteria,
  faBiohazard,
  faBone,
  faBrain,
  faBurn,
  faCat,
  faCircle,
  faCloud,
  faCloudMoon,
  faCloudSun,
  faCoffee,
  faCrow,
  faDharmachakra,
  faDog,
  faDragon,
  faDrum,
  faDungeon,
  faEye,
  faFistRaised,
  faForward,
  faGem,
  faGrinSquint,
  faGuitar,
  faHatWizard,
  faHorse,
  faHorseHead,
  faLungsVirus,
  faMeteor,
  faMountain,
  faMusic,
  faPause,
  faPlay,
  faPray,
  faSeedling,
  faSignature,
  faSkull,
  faSkullCrossbones,
  faSnowflake,
  faSpider,
  faStop,
  faUsers,
  faVirusSlash,
  faWater,
  faWaveSquare,
  faWind,
  faYinYang,

} from "@fortawesome/free-solid-svg-icons";

import Musings from "./components/Musings/musings";
import Home from "./components/Home/home";
import NavBar from "./components/Navbar/navbar";
import MP3Player from "./components/MP3Player/MP3Player";
import { FaFortAwesomeAlt } from "react-icons/fa";
//import styles from "./App.css";

library.add(
  faAllergies,
  faAtom,
  faBackward,
  faBacteria,
  faBiohazard,
  faBone,
  faBrain,
  faBurn,
  faCat,
  faCircle,
  faCloud,
  faCloudMoon,
  faCloudSun,
  faCoffee,
  faCrow,
  faDharmachakra,
  faDog,
  faDragon,
  faDrum,
  faDungeon,
  faEye,
  faFistRaised,
  faForward,
  faGem,
  faGrinSquint,
  faGuitar,
  faHatWizard,
  faHorse,
  faHorseHead,
  faLungsVirus,
  faMeteor,
  faMountain,
  faMusic,
  faPause,
  faPlay,
  faPray,
  faSeedling,
  faSignature,
  faSkull,
  faSkullCrossbones,
  faSnowflake,
  faSpider,
  faStop,
  faUsers,
  faVirusSlash,
  faWater,
  faWaveSquare,
  faWind,
  faYinYang,

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

