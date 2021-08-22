import { useState } from "react";
import "./styles.css";

const allSongList = [
  {
    id: 1,
    name: "Khoon Chala",
    movie: "Rang De Basanti",
    artist: "Mohit Chauhan"
  },
  { id: 2, name: "Tum Se Hi", movie: "Jab We Met", artist: "Mohit Chauhan" },
  {
    id: 3,
    name: "Pee Loon",
    movie: "Once Upon A Time In Mumbaai",
    artist: "Mohit Chauhan"
  },
  { id: 4, name: "Dooriyan", movie: "Love Aaj Kal", artist: "Mohit Chauhan" },
  {
    id: 5,
    name: "Phir Se Udd Chala",
    movie: "Rockstar",
    artist: "Mohit Chauhan"
  },
  { id: 6, name: "O Humdum Suniyo Re", movie: "Saathiya", artist: "KK" },
  { id: 7, name: "Aashayein", movie: "iqbal", artist: "KK" },
  { id: 8, name: "Ek Nazar Mein Bhi", movie: "Taxi Number 9211", artist: "KK" },
  { id: 9, name: "Kya Mujhe Pyaar Hai", movie: "Woh Lamhe", artist: "KK" },
  { id: 10, name: "Mat Aazma Re", movie: "Murder 3", artist: "KK" },
  {
    id: 11,
    name: "Kal Ho Naa Ho",
    movie: "Kal Ho Naa Ho",
    artist: "Sonu Nigam"
  },
  {
    id: 12,
    name: "Kandhon Se Milte Hain Kandhe",
    movie: "Lakshya ",
    artist: "Sonu Nigam"
  },
  { id: 13, name: "Main Hoon Na", movie: "Main Hoon Na", artist: "Sonu Nigam" },
  { id: 14, name: "Do Pal", movie: "Veer-Zaara", artist: "Sonu Nigam" },
  {
    id: 15,
    name: "Gustakh Dil Tere Liye",
    movie: "Dil Maange More",
    artist: "Sonu Nigam"
  }
];
export default function App() {
  let singers = ["Mohit Chauhan", "KK", "Sonu Nigam"];
  const [selectedIndex, setSelectedIndex] = useState(10);
  const [songList, setSongList] = useState([]);

  const buttonClickEventHandler = (index) => {
    setSelectedIndex(index);
    const selectedArtist = singers[index];
    let songList = allSongList.filter((a) => a.artist === selectedArtist);
    setSongList(songList);
    console.log(songList);
  };

  return (
    <div className="App">
      <h1>Songs</h1>
      <h5>check out my favourite song. Select genere to get started.</h5>
      {singers.map((singer, index) => {
        return (
          <button
            className={"btn " + (selectedIndex === index ? "active" : "")}
            onClick={() => buttonClickEventHandler(index)}
            key={index}
          >
            {singer}
          </button>
        );
      })}
      <hr />
      <ul className="list-no-bullet">
        {songList.map((song) => {
          return (
            <li className="list-item">
              <span>{song.name}</span>
              <p>{song.movie}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
