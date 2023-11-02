import React, { useEffect, useState } from "react";
import { dateFormat, fetchData, urls } from "../utils";
import UpdatePost from "./updatePost";
import { usePostContext } from "../context/postContext";

function DetailPost() {
  const { selectedPost } = usePostContext();
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetchData(urls.urlDetail + selectedPost, null, setData);
  }, [selectedPost]);

  const handleUpdate = () => {
    setEdit(!edit);
  };
  return (
    <div className="detail">
      <h2>Plus d'informations</h2>
      <div className="info flex">
        {data && (
          <>
            <p>
              <span>Titre</span>
              <span>{data.title}</span>
            </p>

            <p>
              <span>Adresse</span>
              <span>{data.address}</span>{" "}
            </p>

            <p>
              <span>Type de bien</span>
              <span>{data.realty_type}</span>
            </p>

            <p>
              <span>Transaction</span>
              <span>{data.transaction_type}</span>
            </p>

            <p>
              <span>Date de publication</span>
              <span>{dateFormat(data.publication_date)}</span>{" "}
            </p>
          </>
        )}
      </div>
      <button className="edit_btn" onClick={handleUpdate}>
        <span className="material-symbols-outlined">edit</span>
      </button>
      {edit && <UpdatePost />}
    </div>
  );
}

export default DetailPost;
