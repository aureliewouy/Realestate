import React, { useEffect, useState } from "react";
import { urls } from "../utils";
import UpdatePost from "./updatePost";

function DetailPost(props) {
  const [data, setData] = useState(null);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    fetch(urls.urlDetail + props.id)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, [props.id]);

  const handleUpdate = () => {
    setEdit(!edit);
  };
  return (
    <div>
      <h1>Le detail de l'annonce </h1>
      <div>
        {data && (
          <>
            <p>{data.title}</p>
            <p>{data.address}</p>
            <p>{data.realty_type}</p>
            <p>{data.transaction_type}</p>
          </>
        )}
        <button onClick={handleUpdate}>Modifier l'annonce</button>
      </div>
      {edit && <UpdatePost id={data.id} />}
    </div>
  );
}

export default DetailPost;
