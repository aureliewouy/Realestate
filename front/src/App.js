import "./App.css";
import React, { useEffect, useState } from "react";
import CreatePost from "./components/createPost";
import { urls } from "./utils";
import ListPosts from "./components/listPosts";

function App() {
  return (
    <div className="App">
      <ListPosts />
      <h2>Creer une nouvelle annonce</h2>
      <CreatePost />
    </div>
  );
}

export default App;
