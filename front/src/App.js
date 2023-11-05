import "./App.css";
import CreatePost from "./components/createPost";
import DetailPost from "./components/detailPost";
import ListPosts from "./components/listPosts";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <ListPosts />
        <div className="detail_add_container">
          <DetailPost />
          <CreatePost />
        </div>
      </div>
    </div>
  );
}

export default App;
