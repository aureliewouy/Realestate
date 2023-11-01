import React, { useEffect, useState } from "react";
import { urls } from "../utils";
import FormPost from "./formPost";

function UpdatePost(props) {
  const [post, setPost] = useState({
    title: "",
    address: "",
    transaction_type: "",
    realty_type: "",
  });
  useEffect(() => {
    fetch(urls.urlDetail + props.id + "/")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      });
  }, [props.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      title: post.title,
      address: post.address,
      transaction_type: post.transaction_type,
      realty_type: post.realty_type,
    };

    const fetchData = () => {
      fetch(urls.urlUpdate + props.id + "/", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .catch(function (error) {
          console.log("ERROR:", error);
        });
    };

    fetchData();
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
