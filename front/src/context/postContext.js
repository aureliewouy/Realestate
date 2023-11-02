import React, { createContext, useContext, useState } from "react";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState(1);

  return (
    <PostContext.Provider value={{ selectedPost, setSelectedPost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
