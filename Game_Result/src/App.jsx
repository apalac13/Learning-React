import { useState } from "react";
import "./App.css";

import Semafor from "../components/Semafor";

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;

  return (
    <>
      <Semafor datum={date} />
    </>
  );
}

export default App;
