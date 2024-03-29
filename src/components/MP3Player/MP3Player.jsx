import React from 'react';
import { useState, useEffect } from "react";
import Player from "./player";

function MP3Player() {
    const [songs] = useState([
        
        {
          _id: "31",
          title: " Piano Concertini No. 1 - Vivace ",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/piano.jpg",
          color: "blue",
          fontsize: "24px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/pianoConcertoNoteperf_v5.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "32",
          title: " The Joker ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/joker.jpg",
          color: "purple",
          fontsize: "24px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/TheJoker.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
            title: "Epic Oud",
            img_src: "../images/east.jpg",
            src: "https://s3.amazonaws.com/www.ywapom.com/mp3/cinematic_oud.mp3",
        },
        {
          _id: "33",
          title: " Springs Promise ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/spring.jpg",
          color: "green",
          fontsize: "24px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/springs_promise.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "18",
          title: "Fairy Fanfare ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/fairy.jpg",
          color: "gold",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Fairy+Fanfare.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "18",
          title: "Fairy Fanfare - Epic Battle of the Bows",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/ebotb.jpg",
          color: "red",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/EpicBattleOfTheBows.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "34",
          title: " Epic Journey ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/camel.jpg",
          color: "black",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Loop.mp3",
          genre: { _id: "1", name: "Epic" },
        },
        {
          _id: "35",
          title: " Fantasy for Guitar ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/fire-guitar.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/FantasyForGuitar.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "16",
          title: "Diamond Heist  ",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/diamond.jpg",
          color: "blue",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Sokrates.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "41",
          title: "Romantic Requiem ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/forest.jpg",
          color: "black",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/RomanticRequiem_v10.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "37",
          title: " KFSS WO 2 ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/bruce.jpg",
          color: "red",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/KFSS_WO2.mp3",
          genre: { _id: "9", name: "Video Soundtrack" },
          link: "https://youtu.be/wihf73z-GEY",
          linkText: "YouTube Video!",
        },
        {
          _id: "36",
          title: " KFSS WO 4 ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/bruce.jpg",
          color: "red",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Loop.mp3",
          genre: { _id: "9", name: "Video Soundtrack" },
          link: "https://youtu.be/wWeucdpHYBs",
          linkText: "YouTube Video!",
        },
        {
          _id: "1",
          title: " Cool Sands",
          // composer: "R.T.H.",
          date: "2018",
          img_src: "../images/cool.jpg",
          color: "blue",
          fontsize: "24px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Cool+Sands.mp3",
          genre: { _id: "7", name: "Smooth" },
        },
        {
          _id: "2",
          title: " Berber Highlands",
          // composer: "R.T.H.",
          date: "2018",
          img_src: "../images/berber.jpg",
          color: "brown",
          fontsize: "24px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Algiers_ringtone.mp3",
          genre: { _id: "6", name: "Unspecified" },
        },
        {
          _id: "3",
          title: " Kitties of the World",
          // composer: "Kyler Magnus H., R.T.H.",
          date: "2019",
          img_src: "../images/cat.jpg",
          color: "orange",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Kitties.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "4",
          title: " Undead Daughter",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/zombie.jpg",
          color: "pink",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Undead_Daughter.mp3",
          genre: { _id: "8", name: "Dark" },
          link: "https://youtu.be/DiLOfUFtuPo",
          linkText: "YouTube Video!",
        },
        {
          _id: "5",
          title: " Optic Neuritis",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/eye.jpg",
          color: "red",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/ON.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "6",
          title: " Pegasus",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/pegasus.jpg",
          color: "wheat",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Pegasus.mp3",
          genre: { _id: "7", name: "Smooth" },
        },
        {
          _id: "7",
          title: " Claw Hand",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/freddy.jpg",
          color: "saddlebrown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Claw_hand.mp3",
          genre: { _id: "1", name: "Epic" },
        },
        {
          _id: "8",
          title: " Gigue",
          // composer: "R.T.H.",
          date: "1990",
          img_src: "../images/music.jpg",
          color: "teal",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/gigue.mp3",
          genre: { _id: "2", name: "Baroque" },
        },
        {
          _id: "9",
          title: "Invention  ",
          // composer: "R.T.H.",
          date: "1990",
          img_src: "../images/music.jpg",
          color: "blueviolet",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/invention.mp3",
          genre: { _id: "2", name: "Baroque" },
        },
        {
          _id: "10",
          title: "Sarabande  ",
          // composer: "R.T.H.",
          date: "1990",
          img_src: "../images/music.jpg",
          color: "green",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Sarabande.mp3",
          genre: { _id: "2", name: "Baroque" },
        },
        {
          _id: "11",
          title: "Late Minus Five  ",
          // composer: "R.T.H.",
          date: "1992",
          img_src: "../images/music.jpg",
          color: "green",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/late_minus_5.mp3",
          genre: { _id: "3", name: "Modern" },
        },
        {
          _id: "12",
          title: "Radagast and the Sick  ",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/music.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Radagast.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "13",
          title: "Kosmos  ",
          // composer: "R.T.H.",
          date: "1994",
          img_src: "../images/music.jpg",
          color: "blue",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/kato_kosmos.mp3",
          genre: { _id: "3", name: "Modern" },
        },
        {
          _id: "14",
          title: "Elpizo ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/music.jpg",
          color: "bronze",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Elpizo.mp3",
          genre: { _id: "4", name: "Neo-Classical" },
        },
        {
          _id: "15",
          title: "Measure of Three  ",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/music.jpg",
          color: "gold",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/3measures.mp3",
          genre: { _id: "5", name: "Jazz" },
        },
        
        {
          _id: "17",
          title: "Calibos ",
          // composer: "R.T.H.",
          date: "2019",
          img_src: "../images/music.jpg",
          color: "tan",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Calibos.mp3",
          genre: { _id: "1", name: "Epic" },
        },
        {
          _id: "19",
          title: "Tribute ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/music.jpg",
          color: "tan",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/tribute.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "20",
          title: "Present ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/music.jpg",
          color: "red",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/present.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "21",
          title: "Tenth Life of Ithaca ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/music.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/TenthLife.mp3",
          genre: { _id: "8", name: "Dark" },
        },
        {
          _id: "23",
          title: "Europa - unfinished ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/europa.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Europa_bbc.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "24",
          title: "Lift Off - unfinished ",
          // composer: "R.T.H.",
          date: "2020",
          img_src: "../images/launch.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/epic_commentary.mp3",
          genre: { _id: "1", name: "Epic" },
        },
        {
          _id: "25",
          title: "Guitar Etude #1 ",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/fire-guitar.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/guitar_etude_1.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "26",
          title: "Walk Among ",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/tombstone.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/cinematic_oud.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "46",
          title: "Walk Among - Alt",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/cool.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/modern_melodic.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "27",
          title: "Ultra E ",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/heavens.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/ultrae.mp3",
          genre: { _id: "1", name: "Epic" },
        },
        {
          _id: "28",
          title: "Spartacus ",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/blood.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Marvel_092021.mp3",
          genre: { _id: "1", name: "Epic" },
        },
        {
          _id: "47",
          title: "Somber Mist",
          // composer: "R.T.H.",
          date: "2021",
          img_src: "../images/mist.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/somber_mist.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "48",
          title: "Gypsy Vendetta",
          // composer: "R.T.H.",
          date: "2022",
          img_src: "../images/gypsy.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/GypsyVendetta.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "49",
          title: "Guitar Fantasy No.3",
          // composer: "R.T.H.",
          date: "2022",
          img_src: "../images/fire-guitar.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Fantasy_3.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
        {
          _id: "49",
          title: "Realms - intro.",
          // composer: "R.T.H.",
          date: "2022",
          img_src: "../images/prophecy.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Realms_intro.mp3",
          genre: { _id: "9", name: "Video Soundtrack" },
        },
        {
          _id: "50",
          title: "Epic Sax",
          // composer: "R.T.H.",
          date: "2022",
          img_src: "../images/shooting_star.jpg",
          color: "brown",
          fontsize: "48px",
          src: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Sax.mp3",
          genre: { _id: "4", name: "Neo-classical" },
        },
      ]);
    
      const [currentSongIndex, setCurrentSongIndex] = useState(0);
      const [nextSongIndex, setNextSongIndex] = useState(0);
    
      useEffect(() => {
        setNextSongIndex(() => {
          if (currentSongIndex + 1 > songs.length - 1) {
            return 0;
          } else {
            return currentSongIndex + 1;
          }
        });
      }, [currentSongIndex, songs.length]);
        return ( 
        <div>
            <Player
                currentSongIndex={currentSongIndex}
                setCurrentSongIndex={setCurrentSongIndex}
                nextSongIndex={nextSongIndex}
                songs={songs}
            />
       </div> 
    );
}
 
export default MP3Player;