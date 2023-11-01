import React, { useEffect, useState } from "react";
import { urls } from "../utils";
import DetailPost from "./detailPost";

function ListPosts() {
  const [data, setData] = useState(null);
  const [showDetail, setShowDetail] = useState(false); // État pour gérer l'affichage de DetailPost
  const [selectedPost, setSelectedPost] = useState("");
  useEffect(() => {
    fetch(urls.urlList)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  const handleViewDetail = (id) => {
    setSelectedPost(id.toString());
    setShowDetail(true);
  };
  //   console.log(data)
  return (
    <div>
      <h1>Les postes disponible</h1>
      <div>
        {data &&
          data.map((element) => {
            return (
              <p
                onClick={() => {
                  handleViewDetail(element.id);
                }}
                key={element.id}
              >
                {" "}
                {element.title}
              </p>
            );
          })}
      </div>
      {showDetail && <DetailPost id={selectedPost} />}{" "}
      {/* Afficher DetailPost si showDetail est true */}
    </div>
  );
}

export default ListPosts;
