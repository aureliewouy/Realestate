import "./App.css";
import CreatePost from "./components/createPost";
import DetailPost from "./components/detailPost";
import ListPosts from "./components/listPosts";

function App() {
  return (
    <div className="App">
      <div className="flex">
        <ListPosts />
        <DetailPost />
      </div>
      <CreatePost />
    </div>
  );
}

export default App;
