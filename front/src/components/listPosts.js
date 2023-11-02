import React, { useEffect, useState } from "react";
import { dateFormat, fetchData, urls } from "../utils";
import { usePostContext } from "../context/postContext";

function ListPosts() {
  const [data, setData] = useState(null);
  const { selectedPost, setSelectedPost } = usePostContext();
  useEffect(() => {
    fetchData(urls.urlList, null, setData);
  }, []);
  const handleViewDetail = (id) => {
    setSelectedPost(id);
  };

  return (
    <div className="list_posts">
      <h2>Les dernières annnonces</h2>
      <div>
        {data &&
          data.map((element) => {
            return (
              <div
                className={`annonce ${
                  selectedPost === element.id && "selected_post"
                }`}
                onClick={() => {
                  handleViewDetail(element.id);
                }}
                key={element.id}
              >
                <span key={element.id}>
                  {dateFormat(element.publication_date)}
                </span>
                <p key={element.id + "title"}>{element.title}</p>
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
