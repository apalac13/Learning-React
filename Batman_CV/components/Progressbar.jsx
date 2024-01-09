function Progressbar(props) {
  return (
    <div className="fill-progress-bar">
      <span className="percentage"> {props.percentage} </span>
    </div>
  );
}

export default Progressbar;
