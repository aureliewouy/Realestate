import CreatePost from "./components/createPost";
import DetailPost from "./components/detailPost";
import ListPosts from "./components/listPosts";
import "./App.css";
import { useEffect, useState } from "react";
import { fetchData, urls } from "./utils/utils";

function App() {
  const [dataChange, setDataChange] = useState("");
  const [selectedPost, setSelectedPost] = useState(1);
  const [data, setData] = useState(null);
  useEffect(() => {
    fetchData(urls.urlList, null, setData, null);
    if (dataChange) {
      fetchData(urls.urlList, null, setData, null);
    }
  }, [setData, dataChange]);

  const handleChange = (random) => {
    setDataChange(random);
  };
  const handleSelectedPost = (id) => {
    setSelectedPost(id);
  };

  return (
    <div className="App">
      <div className="flex">
        <ListPosts
          selectedPost={selectedPost}
          data={data}
          dataChange={dataChange}
          handleSelectedPost={handleSelectedPost}
        />
        <div className="detail_add_container">
          <DetailPost
            handleSelectedPost={handleSelectedPost}
            selectedPost={selectedPost}
            handleChange={handleChange}
          />
          <CreatePost handleChange={handleChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
