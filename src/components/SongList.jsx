import { useState, useEffect } from "react";
import NewSongForm from "./NewSongForm";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  // title id
  const [songs, setSongs] = useState([]);

  const addSong = (title) => {
    const song = { title, id: uuidv4() };
    setSongs((prevState) => [...prevState, { ...song }]);
    localStorage.setItem("songs", JSON.stringify([...songs, song]));
  };

  useEffect(() => {
    setSongs(JSON.parse(localStorage.getItem("songs")));
  }, []);

  return (
    <>
      {/* destructuring */}
      {songs.map(({ title, id }) => (
        <li key={id}>{title}</li>
      ))}
      <NewSongForm addSong={addSong} />
    </>
  );
};

export default SongList;
