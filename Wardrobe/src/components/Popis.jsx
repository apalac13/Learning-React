import { useState } from "react";
import RedakTablice from "./RedakTablice";
import Filter from "./Filter";

function Popis({ garderoba }) {
  const [filter, postaviFilter] = useState("");
  const paramertri = ["Vrsta", "Veličina", "Boja", "Slika", "Opcije"];

  return (
    <div>
      <Filter filter={filter} postavi={postaviFilter} />
      <div>
        <h1 className="text-xl mb-2">Popis</h1>
        <div>
          <table className="w-full border-2 border-black">
            <thead>
              <tr>
                {paramertri.map((parametar, index) => (
                  <th
                    key={index}
                    className="bg-[#b4d3b2] p-2 border-2 border-r border-black"
                  >
                    {parametar}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filter === ""
                ? garderoba.map((g) => <RedakTablice key={g.id} rez={g} />)
                : garderoba
                    .filter((g) => g.vrsta === filter)
                    .map((g) => <RedakTablice key={g.id} rez={g} />)}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Popis;
