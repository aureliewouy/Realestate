function SortFilter(props) {
  const arrowIcon = (direction) => {
    return direction === "asc" ? (
      <span className="material-symbols-outlined">keyboard_arrow_down</span>
    ) : (
      <span className="material-symbols-outlined">keyboard_arrow_up</span>
    );
  };

  return (
    <div className="sort_filter_container">
      <div>
        <span>Sort by</span>
        <button
          onClick={() => {
            props.handleSortData("title");
          }}
        >
          Titre {arrowIcon(props.sortDirection.title)}
        </button>
        <button
          onClick={() => {
            props.handleSortData("publication_date");
          }}
        >
          Date de publication {arrowIcon(props.sortDirection.publication_date)}
        </button>
      </div>
      <div>
        <span>Filter by</span>
        <select name="filter_by" onChange={props.handleFilterData}>
          <option value="all">Aucun filtre</option>
          <option value="rental">Rental</option>
          <option value="sale">Sale</option>
        </select>
      </div>
    </div>
  );
}

export default SortFilter;
