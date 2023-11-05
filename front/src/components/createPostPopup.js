import React, { useEffect, useState } from "react";
import { fetchData, urls } from "../utils/utils";
import PostAccepted from "./postAccepted";

function CreatePostPopup(props) {
  const [newPost, setNewPost] = useState(null);
  const [error, setError] = useState(null);
  const [post, setPost] = useState({
    title: "",
    address: "",
    transaction_type: "",
    realty_type: "",
  });
  useEffect(() => {
    if (newPost !== null) {
      props.handleChange(Math.random());
    }
    // eslint-disable-next-line
  }, [newPost]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(post),
    };
    fetchData(urls.urlCreate, config, setNewPost, setError);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };
  return (
    <div className="popup-container" onClick={props.onClose}>
      <div className="create_post" onClick={(e) => e.stopPropagation()}>
        {newPost !== null ? (
          <PostAccepted onClose={props.onClose} />
        ) : (
          <>
            <h2>Creer une nouvelle annonce</h2>
            <form onSubmit={handleSubmit}>
              <p>Titre</p>

              <input
                type="text"
                name="title"
                value={post.title}
                onChange={handleInputChange}
              ></input>
              {error && error.hasOwnProperty("title") && (
                <span className="error">*{error.title}</span>
              )}
              <p>Adresse</p>

              <input
                type="text"
                name="address"
                value={post.address}
                onChange={handleInputChange}
              ></input>
              {error && error.hasOwnProperty("address") && (
                <span className="error">*{error.address}</span>
              )}
              <p>Transaction type </p>

              <select
                name="transaction_type"
                value={post.transaction_type}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="rental">Rental</option>
                <option value="sale">Sale</option>
              </select>
              {error && error.hasOwnProperty("transaction_type") && (
                <span className="error">*{error.transaction_type}</span>
              )}
              <p>Realty type </p>

              <select
                name="realty_type"
                value={post.realty_type}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="office">Office</option>
                <option value="land plot">Land plot</option>
                <option value="warehouse">Warehouse</option>
                <option value="retail">Retail</option>
                <option value="coworking">Coworking</option>
              </select>
              {error && error.hasOwnProperty("realty_type") && (
                <span className="error">*{error.realty_type}</span>
              )}
              <button className="create_btn" type="submit">
                Ajouter
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default CreatePostPopup;
