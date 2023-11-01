import React, { useEffect, useState } from "react";
import { urls } from "../utils";

function FormPost(props) {
  const post = props.post;
  return (
    <form onSubmit={props.handleSubmit}>
      <p>Title</p>
      <input
        type="text"
        name="title"
        value={post.title}
        onChange={props.handleInputChange}
      ></input>
      <p>Adresse</p>
      <input
        type="text"
        name="address"
        value={post.address}
        onChange={props.handleInputChange}
      ></input>
      <p>Transaction type </p>

      <select
        name="transaction_type"
        value={post.transaction_type}
        onChange={props.handleInputChange}
      >
        <option value="">--Please choose an option--</option>
        <option value="rental">Rental</option>
        <option value="sale">Sale</option>
      </select>

      <p>Realty type </p>
      <select
        name="realty_type"
        value={post.realty_type}
        onChange={props.handleInputChange}
      >
        <option value="">--Please choose an option--</option>
        <option value="office">Office</option>
        <option value="land_plot">Land plot</option>
        <option value="warehouse">Warehouse</option>
        <option value="retail">Retail</option>
        <option value="coworking">Coworking</option>
      </select>

      <br></br>
      <button type="submit">Submit</button>

      <br></br>
    </form>
  );
}

export default FormPost;
