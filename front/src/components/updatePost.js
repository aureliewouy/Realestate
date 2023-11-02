import React, { useEffect, useState } from "react";
import { fetchData, urls } from "../utils";
import FormPost from "./formPost";
import { usePostContext } from "../context/postContext";

function UpdatePost() {
  const { selectedPost } = usePostContext();
  const [post, setPost] = useState({
    title: "",
    address: "",
    transaction_type: "",
    realty_type: "",
  });

  useEffect(() => {
    fetchData(urls.urlDetail + selectedPost, null, setPost);
  }, [selectedPost]);

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
    fetchData(urls.urlUpdate + selectedPost + "/", config, null);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
  };
  return (
    <div className="">
      <FormPost
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        post={post}
      />
    </div>
  );
}

export default UpdatePost;
