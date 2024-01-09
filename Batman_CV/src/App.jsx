import "./App.css";
import Zivotopis from "../components/Zivotopis";

function App() {
  return (
    <>
      <Zivotopis
        datum={"30.ožujka, 1988."}
        adresa={"Batman Cave 1, Gotham City"}
        kontakt={"Bat-signal"}
        detektivske={100}
        borilacke={90}
        javascript={77}
      />
    </>
  );
}

export default App;
