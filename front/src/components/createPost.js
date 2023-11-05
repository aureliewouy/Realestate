import React, { useState } from "react";
import CreatePostPopup from "./createPostPopup";

function CreatePost({ handleChange }) {
  const [isVisible, setIsVisible] = useState(false);
  const onClosePopup = () => {
    setIsVisible(null);
  };

  return (
    <div>
      <button className="create_btn" onClick={() => setIsVisible(true)}>
        Créer une annonce
      </button>
      {isVisible && (
        <CreatePostPopup onClose={onClosePopup} handleChange={handleChange} />
      )}
    </div>
  );
}

export default CreatePost;
