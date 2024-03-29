const tunes = [
  {
    _id: "1",
    title: " Piano Concertini No. 1 - Vivace ",
    // composer: "R.T.H.",
    date: "2021",
    image: "meteor",
    color: "blue",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/pianoConcertoNoteperf_v5.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "2",
    title: " The Joker ",
    // composer: "R.T.H.",
    date: "2020",
    image: "grin-squint",
    color: "purple",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/TheJoker.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "3",
    title: " Springs Promise ",
    // composer: "R.T.H.",
    date: "2020",
    image: "seedling",
    color: "green",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/springs_promise.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "4",
    title: " Somber Mist ",
    // composer: "R.T.H.",
    date: "2020",
    image: "water",
    color: "blue",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/somber_mist.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "5",
    title: "Fairy Fanfare ",
    // composer: "R.T.H.",
    date: "2020",
    image: "signature",
    color: "gold",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Fairy+Fanfare.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "6",
    title: "Fairy Fanfare For Strings - AKA: Epic Battle of the Bows",
    // composer: "R.T.H.",
    date: "2020",
    image: "signature",
    color: "red",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/EpicBattleOfTheBows.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "7",
    title: " Epic Journey ",
    // composer: "R.T.H.",
    date: "2020",
    image: "users",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Loop.mp3",
    genre: { _id: "1", name: "Epic" },
  },
  {
    _id: "8",
    title: "Walk Among ",
    // composer: "R.T.H.",
    date: "2021",
    image: "crow",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/cinematic_oud.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "9",
    title: "Walk Among - alternates",
    // composer: "R.T.H.",
    date: "2021",
    image: "coffee",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/modern_melodic.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "10",
    title: " Fantasy for Guitar ",
    // composer: "R.T.H.",
    date: "2020",
    image: "guitar",
    color: "brown",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/FantasyForGuitar.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "11",
    title: "Diamond Heist  ",
    // composer: "R.T.H.",
    date: "2019",
    image: "gem",
    color: "blue",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Sokrates.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "12",
    title: "Romantic Requiem ",
    // composer: "R.T.H.",
    date: "2020",
    image: "dungeon",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/RomanticRequiem_v10.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "13",
    title: " KFSS WO 2 ",
    // composer: "R.T.H.",
    date: "2020",
    image: "yin-yang",
    color: "green",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/KFSS_WO2.mp3",
    genre: { _id: "9", name: "Video Soundtrack" },
    link: "https://youtu.be/wihf73z-GEY",
    linkText: "YouTube Video!",
  },
  {
    _id: "14",
    title: " KFSS WO 4 ",
    // composer: "R.T.H.",
    date: "2020",
    image: "yin-yang",
    color: "orange",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Loop.mp3",
    genre: { _id: "9", name: "Video Soundtrack" },
    link: "https://youtu.be/wWeucdpHYBs",
    linkText: "YouTube Video!",
  },
  {
    _id: "15",
    title: " Cool Sands",
    // composer: "R.T.H.",
    date: "2018",
    image: "wind",
    color: "blue",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Cool+Sands.mp3",
    genre: { _id: "7", name: "Smooth" },
  },
  {
    _id: "16",
    title: " Berber Highlands",
    // composer: "R.T.H.",
    date: "2018",
    image: "mountain",
    color: "brown",
    fontsize: "24px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Algiers_ringtone.mp3",
    genre: { _id: "6", name: "Unspecified" },
  },
  {
    _id: "17",
    title: " Kitties of the World",
    // composer: "Kyler Magnus H., R.T.H.",
    date: "2019",
    image: "cat",
    color: "orange",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Kitties.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "18",
    title: " Undead Daughter",
    // composer: "R.T.H.",
    date: "2019",
    image: "brain",
    color: "pink",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Undead_Daughter.mp3",
    genre: { _id: "8", name: "Dark" },
    link: "https://youtu.be/DiLOfUFtuPo",
    linkText: "YouTube Video!",
  },
  {
    _id: "19",
    title: " Optic Neuritis",
    // composer: "R.T.H.",
    date: "2019",
    image: "eye",
    color: "red",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/ON.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "20",
    title: " Pegasus",
    // composer: "R.T.H.",
    date: "2019",
    image: "horse-head",
    color: "wheat",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Pegasus.mp3",
    genre: { _id: "7", name: "Smooth" },
  },
  {
    _id: "21",
    title: " Claw Hand",
    // composer: "R.T.H.",
    date: "2019",
    image: "fist-raised",
    color: "brown",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Claw_hand.mp3",
    genre: { _id: "1", name: "Epic" },
  },
  {
    _id: "22",
    title: " Gigue",
    // composer: "R.T.H.",
    date: "1990",
    image: "music",
    color: "teal",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/gigue.mp3",
    genre: { _id: "2", name: "Baroque" },
  },
  {
    _id: "23",
    title: "Invention  ",
    // composer: "R.T.H.",
    date: "1990",
    image: "music",
    color: "blue",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/invention.mp3",
    genre: { _id: "2", name: "Baroque" },
  },
  {
    _id: "24",
    title: "Sarabande  ",
    // composer: "R.T.H.",
    date: "1990",
    image: "music",
    color: "green",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Sarabande.mp3",
    genre: { _id: "2", name: "Baroque" },
  },
  {
    _id: "25",
    title: "Late Minus Five  ",
    // composer: "R.T.H.",
    date: "1992",
    image: "wave-square",
    color: "green",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/late_minus_5.mp3",
    genre: { _id: "3", name: "Modern" },
  },
  {
    _id: "26",
    title: "Radagast and the Sick  ",
    // composer: "R.T.H.",
    date: "2019",
    image: "hat-wizard",
    color: "brown",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Radagast.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "43",
    title: "Kosmos  ",
    // composer: "R.T.H.",
    date: "1994",
    image: "circle",
    color: "blue",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/kato_kosmos.mp3",
    genre: { _id: "3", name: "Modern" },
  },
  {
    _id: "27",
    title: "Elpizo ",
    // composer: "R.T.H.",
    date: "2020",
    image: "atom",
    color: "bronze",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Elpizo.mp3",
    genre: { _id: "4", name: "Neo-Classical" },
  },
  {
    _id: "28",
    title: "Measure of Three  ",
    // composer: "R.T.H.",
    date: "2019",
    image: "drum",
    color: "gold",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/3measures.mp3",
    genre: { _id: "5", name: "Jazz" },
  },
  
  {
    _id: "29",
    title: "Calibos ",
    // composer: "R.T.H.",
    date: "2019",
    image: "skull",
    color: "tan",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Calibos.mp3",
    genre: { _id: "1", name: "Epic" },
  },
  {
    _id: "30",
    title: "Tribute ",
    // composer: "R.T.H.",
    date: "2020",
    image: "music",
    color: "tan",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/tribute.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "31",
    title: "Present ",
    // composer: "R.T.H.",
    date: "2020",
    image: "dog",
    color: "brown",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/present.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "32",
    title: "The Rider ",
    // composer: "R.T.H.",
    date: "2020",
    image: "horse",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/mando.mp3",
    genre: { _id: "9", name: "Video-soundtrack" },
  },
  {
    _id: "33",
    title: "Tenth Life of Ithaca ",
    // composer: "R.T.H.",
    date: "2020",
    image: "cat",
    color: "brown",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/TenthLife.mp3",
    genre: { _id: "8", name: "Dark" },
  },
  {
    _id: "34",
    title: "Ultra E ",
    // composer: "R.T.H.",
    date: "2020",
    image: "atom",
    color: "teal",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/ultrae.mp3",
    genre: { _id: "1", name: "Epic" },
  },
  {
    _id: "35",
    title: "Spartacus ",
    // composer: "R.T.H.",
    date: "2020",
    image: "fist-raised",
    color: "red",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Marvel_092021.mp3",
    genre: { _id: "1", name: "Epic" },
  },
  {
    _id: "36",
    title: "Europa - unfinished",
    // composer: "R.T.H.",
    date: "2020",
    image: "cloud-moon",
    color: "purple",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Europa_bbc.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "37",
    title: "Lift Off - unfinished",
    // composer: "R.T.H.",
    date: "2020",
    image: "circle",
    color: "green",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/epic_commentary.mp3",
    genre: { _id: "1", name: "Epic" },
  },
  {
    _id: "38",
    title: "Guitar Etude #1",
    // composer: "R.T.H.",
    date: "2020",
    image: "guitar",
    color: "green",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/guitar_etude_1.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "39",
    title: "Guitar Fantasy #3",
    // composer: "R.T.H.",
    date: "2022",
    image: "guitar",
    color: "green",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Fantasy_3.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "40",
    title: "Gypsy Vendetta",
    // composer: "R.T.H.",
    date: "2022",
    image: "cat",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/GypsyVendetta.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
  {
    _id: "41",
    title: "Realms - intro.",
    // composer: "R.T.H.",
    date: "2022",
    image: "cloud-moon",
    color: "black",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Realms_intro.mp3",
    genre: { _id: "9", name: "Video Soundtrack" },
  },
  {
    _id: "42",
    title: "Epic Sax",
    // composer: "R.T.H.",
    date: "2022",
    image: "music",
    color: "gold",
    fontsize: "48px",
    url: "https://s3.amazonaws.com/www.ywapom.com/mp3/Epic_Sax.mp3",
    genre: { _id: "4", name: "Neo-classical" },
  },
];

export function getTunes() {
  return tunes;
}

export function getTune(id) {
  return tunes.find((t) => t._id === id);
}
