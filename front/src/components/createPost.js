import React, { useEffect, useState } from "react";
import { fetchData, urls } from "../utils";
import FormPost from "./formPost";

function CreatePost() {
  const [post, setPost] = useState({
    title: "",
    address: "",
    transaction_type: "",
    realty_type: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: post.title,
      address: post.address,
      transaction_type: post.transaction_type,
      realty_type: post.realty_type,
    };
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetchData(urls.urlCreate, config, null);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };
  return (
    <div className="create_post">
      <h2>Creer une nouvelle annonce</h2>
      <FormPost
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        post={post}
      />
    </div>
  );
}

export default CreatePost;
