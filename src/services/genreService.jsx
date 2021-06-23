export const genres = [
    { _id: "1", name: "Epic" },
    { _id: "2", name: "Baroque" },
    { _id: "3", name: "Modern" },
    { _id: "4", name: "Neo-Classical" },
    { _id: "5", name: "Jazz" },
    { _id: "7", name: "Smooth" },
    { _id: "8", name: "Dark" },
    { _id: "9", name: "Video Soundtrack"}
  ];
  
  export function getGenres() {
    return genres.filter(g => g);
  }