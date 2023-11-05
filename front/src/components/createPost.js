import React, { useState } from "react";
import CreatePostPopup from "./createPostPopup";

function CreatePost() {
  const [isVisible, setIsVisible] = useState(false);
  const onClosePopup = () => {
    setIsVisible(null);
  };
  return (
    <div>
      <button className="create_btn" onClick={() => setIsVisible(true)}>
        Créer une annonce
      </button>
      {isVisible && <CreatePostPopup onClose={onClosePopup} />}
    </div>
  );
}

export default CreatePost;
