import React, { useCallback, useEffect, useState } from "react";
import { dateFormat, filterData, sortData } from "../utils/utils";
import SortFilter from "./sortFilter";

function ListPosts(props) {
  const { data, selectedPost, handleSelectedPost } = props;
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [sortDirection, setSortDirection] = useState({
    title: "asc",
    publication_date: "asc",
  });

  useEffect(() => {
    if (data) {
      setDataToDisplay(sortData(data, "publication_date", sortDirection));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, setDataToDisplay]);

  const handleSortData = useCallback(
    (element) => {
      const newSortedData = sortData(
        dataToDisplay,
        element,
        sortDirection[element],
      );
      const newDirection = sortDirection[element] === "asc" ? "desc" : "asc";
      setSortDirection({ ...sortDirection, [element]: newDirection });
      setDataToDisplay(newSortedData);
    },
    [dataToDisplay, sortDirection],
  );

  const handleFilterData = useCallback(
    (e) => {
      const { value } = e.target;
      if (value === "all") {
        setDataToDisplay(data);
      } else {
        const newFilteredData = filterData(data, "transaction_type", value);
        setDataToDisplay(newFilteredData);
      }
    },
    [data],
  );

  return (
    <div className="list_posts">
      <h2>Les dernières annnonces</h2>
      <div>
        <SortFilter
          handleSortData={handleSortData}
          handleFilterData={handleFilterData}
          sortDirection={sortDirection}
        />
        {dataToDisplay &&
          dataToDisplay.map((element) => {
            return (
              <div
                className={`annonce ${
                  selectedPost === element.id && "selected_post"
                }`}
                onClick={() => {
                  handleSelectedPost(element.id);
                }}
                key={element.id}
              >
                <span key={element.id}>
                  {dateFormat(element.publication_date)}
                </span>
                <p key={element.title}>{element.title}</p>
                <div className="transaction" key={element.id + "transaction"}>
                  {element.transaction_type}
                  <span className="material-symbols-outlined">sell</span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListPosts;
