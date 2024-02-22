import { useState, useEffect } from "react";

const initialFunc = () => {
  console.log("run function");
  return 0;
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //   const [counter, setCounter] = useState(initialFunc());

  // renderuje se pri svakoj promeni odnosno renderovanju (mount, update, unmount)
  //   useEffect(() => {
  //     console.log("render");
  //   });

  //   samo jednom kada se komponenta prvi put upisala u DOM
  useEffect(() => {
    console.log("component did mount");
  }, []);

  useEffect(() => {
    console.log("component did update");
  }, [counter]);

  //   kada se komponenta izbrise iz DOM-a
  // for e.g. cancelling network request, ciscenje nekog state-a
  useEffect(() => {
    console.log("Hello world!");

    return () => {
      console.log("component did unmount");
    };
  }, []);

  // fragment - nekada React.Fragment
  return (
    <>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <span>{counter}</span>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </>
  );
};

export default Counter;
