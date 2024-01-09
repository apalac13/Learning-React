import chelseaLogo from "../images/chelsea_logo.png";
import arsenalLogo from "../images/arsenal_logo.png";

import Tipka from "./Tipka";
import Prikaz from "./Prikaz";
import { useState } from "react";

function Semafor(props) {
  const [brojaci, postaviBrojace] = useState({ prvi: 0, drugi: 0 });

  function resetOba() {
    let novi = { ...brojaci };
    novi.prvi = 0;
    novi.drugi = 0;

    postaviBrojace(novi);
  }

  const uvecajPrvi = () => {
    let novi = { ...brojaci };
    novi.prvi += 1;
    postaviBrojace(novi);
  };

  const umanjiPrvi = () => {
    let novi = { ...brojaci };
    novi.prvi -= 1;
    postaviBrojace(novi);
  };

  const uvecajDrugi = () => {
    let novi = { ...brojaci };
    novi.drugi += 1;
    postaviBrojace(novi);
  };
  const umanjiDrugi = () => {
    let novi = { ...brojaci };
    novi.drugi -= 1;
    postaviBrojace(novi);
  };

  return (
    <div className="container">
      <div className="date">{props.datum}</div>
      <div className="teams-result">
        <div className="team-1">
          <img src={chelseaLogo} alt="Chelsea Logo" />
          <p className="team-name">Chelsea</p>
        </div>
        <p className="result">
          <Prikaz broj={brojaci.prvi} />
          <div className="dots">:</div>
          <Prikaz broj={brojaci.drugi} />
        </p>
        <div className="team-2">
          <img src={arsenalLogo} alt="Arsenal Logo" />
          <p className="team-name">Arsenal</p>
        </div>
      </div>
      <div className="buttons">
        <Tipka natpis="+" akcija={uvecajPrvi} />
        <Tipka natpis="-" akcija={umanjiPrvi} />
        <Tipka natpis="+" akcija={uvecajDrugi} />
        <Tipka natpis="-" akcija={umanjiDrugi} />
      </div>
      <div className="reset-button">
        <Tipka natpis="reset" akcija={resetOba} />
      </div>
    </div>
  );
}

export default Semafor;
