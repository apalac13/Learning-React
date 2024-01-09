import { useEffect, useState } from "react";
import axios from "axios";

function Dodaj(props) {
  const [komadOdjece, postaviKomadOdjece] = useState({
    vrsta: "",
    velicina: "",
    boja: "",
    slika: "",
  });

  const [vrsta, postaviVrstu] = useState([]);
  const [velicina, postaviVelicinu] = useState([]);
  const [slika, postaviSliku] = useState([]);
  const boje = ["bijela", "crvena", "zuta", "plava", "zelena", "crna"];

  useEffect(() => {
    Promise.all([
      axios.get("http://localhost:3001/vrsta"),
      axios.get("http://localhost:3001/velicina"),
      axios.get("http://localhost:3001/slike"),
    ])
      .then(([rezVrsta, rezVelicina, rezSlika]) => {
        postaviVrstu(rezVrsta.data);
        postaviVelicinu(rezVelicina.data);
        postaviSliku(rezSlika.data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  function promjenaUlaza(event) {
    const { name, value } = event.target;
    postaviKomadOdjece({ ...komadOdjece, [name]: value });
  }
  function promjenaSlike(slikaUrl) {
    postaviKomadOdjece({ ...komadOdjece, slika: slikaUrl });
  }

  const spremiOdjecu = (event) => {
    axios.post("http://localhost:3001/garderoba", komadOdjece).then((rez) => {
      props.dodaj((stanje) => [...stanje, rez.data]);
    });
  };

  return (
    <div className="w-full">
      <h1 className="text-xl mb-2">Dodaj novu</h1>
      <div className="flex flex-col gap-2">
        <div>
          <select
            name="vrsta"
            value={komadOdjece.vrsta}
            onChange={promjenaUlaza}
            className="border border-red-200 rounded w-[200px] h-[30px] hover:border-red-950"
          >
            <option value="">Vrsta</option>
            {vrsta.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="velicina"
            value={komadOdjece.velicina}
            onChange={promjenaUlaza}
            className="border border-red-200 rounded w-[200px] h-[30px]"
          >
            <option value="">Velicina</option>
            {velicina.map((vel) => (
              <option key={vel} value={vel}>
                {vel}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            name="boja"
            value={komadOdjece.boja}
            onChange={promjenaUlaza}
            className="border border-red-200 rounded w-[200px] h-[30px]"
          >
            <option value="">Boja</option>
            {boje.map((boja, index) => (
              <option key={index} value={boja}>
                {boja}
              </option>
            ))}
          </select>
        </div>
        <div className="border border-red-200 rounded self-center">
          {komadOdjece.vrsta === "" ? (
            <p className="bg-[white] w-[200px] h-[30px] text-left">Slika</p>
          ) : (
            slika
              .filter((s) => s.naziv === komadOdjece.vrsta)
              .map((s) => (
                <p
                  name="slika"
                  value={s.slika}
                  onClick={() => promjenaSlike(s.slika)}
                  key={s.naziv}
                  className="bg-[white] w-[200px] h-[30px] text-left"
                >
                  Slika {s.naziv}
                </p>
              ))
          )}
        </div>
      </div>
      <button
        onClick={spremiOdjecu}
        className="w-[200px] h-[30px] mt-2 bg-orange-400 border-2 border-black  "
      >
        Spremi
      </button>
    </div>
  );
}

export default Dodaj;
