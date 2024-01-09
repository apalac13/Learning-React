function Tipka(props) {
  function handleClick() {
    props.akcija();
  }

  return <button onClick={handleClick}>{props.natpis}</button>;
}

export default Tipka;
