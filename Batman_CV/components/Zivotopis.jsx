import images from "../images/batman.png";
import Progressbar from "./Progressbar";

function Zivotopis(props) {
  return (
    <div className="container">
      <h1 className="heading-primary">
        <s className="crossed">Bru</s> Batman
      </h1>
      <img src={images} className="batman-img" alt="Batman-img" />
      <div className="main-info">
        <h2 className="heading-secondary">Opći podaci</h2>
        <hr />
        <ul className="info-list">
          <li className="info">
            <span className="info-name">Datum rođenja:</span>
            <span className="prop-item">{props.datum}</span>
          </li>
          <li className="info">
            <span className="info-name">Adresa:</span>
            <span className="prop-item">{props.adresa}</span>
          </li>
          <li className="info">
            <span className="info-name">Kontakt:</span>
            <span className="prop-item">{props.kontakt}</span>
          </li>
        </ul>
      </div>
      <div className="abilities">
        <h2 className="heading-secondary">Sposobnosti</h2>
        <hr />
        <div className="abilities-list">
          <div className="ability-name">Detektivske vještine:</div>
          <div className="progress-bar">
            <Progressbar percentage={100} />
          </div>

          <div className="ability-name">Borilačke vještine:</div>
          <div className="progress-bar">
            <Progressbar percentage={90} />
          </div>

          <div className="ability-name">JavaScript:</div>
          <div className="progress-bar">
            <Progressbar percentage={77} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zivotopis;
