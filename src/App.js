import "./App.css";
import Counter from "./components/Counter";
import { useState } from "react";
import Select from "./components/Select";
import SongList from "./components/SongList";
function App() {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  return (
    <div className="App">
      {/* uslovno renderovanje */}
      {/* {show && show2 ? <Counter /> : null} */}
      {/* {show && <Counter />} */}

      {/* <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button> */}

      {/* <Select /> */}
      <SongList />
    </div>
  );
}

export default App;
