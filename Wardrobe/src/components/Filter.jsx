function Filter(props) {
  return (
    <div className="flex justify-center gap-10 mb-6 border-b border-black">
      <p>Filter:</p>
      <button
        className="w-[50px] bg-gray-200  border border-black rounded "
        name="filter"
        value=""
        onClick={(e) => props.postavi(e.target.value)}
      >
        Sve
      </button>
      <label className="flex gap-1">
        <input
          type="radio"
          name="filter"
          value="hlace"
          checked={props.filter === "hlace"}
          onChange={(e) => props.postavi(e.target.value)}
        />
        Hlace
      </label>
      <label className="flex gap-1">
        <input
          type="radio"
          name="filter"
          value="suknja"
          checked={props.filter === "suknja"}
          onChange={(e) => props.postavi(e.target.value)}
        />
        Suknje
      </label>
      <label className="flex gap-1">
        <input
          type="radio"
          name="filter"
          value="majica"
          checked={props.filter === "majica"}
          onChange={(e) => props.postavi(e.target.value)}
        />
        Majice
      </label>
    </div>
  );
}

export default Filter;
