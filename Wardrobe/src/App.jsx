import { useEffect, useState } from "react";
import "./App.css";
import Dodaj from "./components/Dodaj";
import Popis from "./components/Popis";
import axios from "axios";

function App() {
  const [garderoba, postaviGarderobu] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/garderoba")
      .then((rez) => postaviGarderobu(rez.data));
  }, []);

  return (
    <div className="font-mono  bg-[#dcaeae]">
      <div className="flex items-center justify-center h-8 p-6 border-2 border-solid border-black">
        <p className=" text-2xl">Moja garderoba</p>
      </div>
      <div className="flex md:flex-row flex-col p-3 gap-10 justify-center border-x-2 border-b-2  border-black">
        <div className="w-full flex  justify-center">
          <Dodaj dodaj={postaviGarderobu} />
        </div>
        <div className="w-full">
          <Popis garderoba={garderoba} />
        </div>
      </div>
    </div>
  );
}

export default App;
