import { useState, useEffect } from "react";
import axios from "axios";

function RedakTablice({ rez }) {
  const [deleted, setDeleted] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const vrste = ["hlace", "suknja", "majica"];
  const velicine = ["XXS", "XS", "S", "M", "L", "XL", "XXL"];
  const boje = ["bijela", "crvena", "zuta", "plava", "zelena", "crna"];
  const [editedData, setEditedData] = useState({
    vrsta: rez.vrsta,
    velicina: rez.velicina,
    boja: rez.boja,
    slika: rez.slika,
    id: rez.id,
  });

  const obrisiPodatak = async () => {
    try {
      await axios.delete(`http://localhost:3001/garderoba/${editedData.id}`);
      setDeleted(true);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  if (deleted) {
    // If the item is deleted, you might choose not to render it
    return null;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function spremiPodatke() {
    axios
      .put(`http://localhost:3001/garderoba/${editedData.id}`, editedData)
      .then((rez) => console.log(rez));
  }

  function handleClick() {
    if (editMode) {
      spremiPodatke();
    }
    setEditMode(!editMode);
  }

  return (
    <tr className="bg-[#d1c5c5] ">
      {editMode ? (
        <>
          <td className=" border-2 border-r border-black">
            <select
              name="vrsta"
              value={editedData.vrsta}
              onChange={handleChange}
            >
              <option value="">Vrsta</option>
              {vrste.map((vrsta, index) => (
                <option key={index} value={vrsta}>
                  {vrsta}
                </option>
              ))}
            </select>
          </td>
          <td className=" border-2 border-r border-black">
            <select
              name="velicina"
              value={editedData.velicina}
              onChange={handleChange}
            >
              <option value="">Velicina</option>
              {velicine.map((velicina, index) => (
                <option key={index} value={velicina}>
                  {velicina}
                </option>
              ))}
            </select>
          </td>
          <td className=" border-2 border-r border-black">
            <select name="boja" value={editedData.boja} onChange={handleChange}>
              <option value="">Boja</option>
              {boje.map((boja, index) => (
                <option key={index} value={boja}>
                  {boja}
                </option>
              ))}
            </select>
          </td>
          <td className=" border-2 border-r border-black">
            <img
              src={`../../${editedData.slika}`}
              alt={editedData.vrsta}
              width={60}
              height={50}
            />
          </td>
        </>
      ) : (
        <>
          <td className=" border-2 border-r border-black">
            {editedData.vrsta}
          </td>
          <td className=" border-2 border-r border-black">
            {editedData.velicina}
          </td>
          <td className=" border-2 border-r border-black">{editedData.boja}</td>

          <td className="flex justify-center border border-black">
            <img
              src={`../../${editedData.slika}`}
              alt={editedData.vrsta}
              width={60}
              height={50}
            />
          </td>
        </>
      )}
      <td className=" border-2 border-r border-black">
        <button
          onClick={handleClick}
          className=" bg-gray-200  border border-black rounded m-1 p-1 "
        >
          {editMode ? "Spremi" : "Uredi"}
        </button>
        <button
          onClick={obrisiPodatak}
          className="w-[25px] bg-red-300 border border-red-400 rounded m-1 p-1"
        >
          X
        </button>
      </td>
    </tr>
  );
}

export default RedakTablice;
