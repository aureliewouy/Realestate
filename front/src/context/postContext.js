import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData, urls } from "../utils";

const PostContext = createContext();

export const PostContextProvider = ({ children }) => {
  const [isChangedData, setIsChangedData] = useState(false);
  const [data, setData] = useState(null);

  const [selectedPost, setSelectedPost] = useState(1);
  useEffect(() => {
    fetchData(urls.urlList, null, setData, null);
  }, [setData, isChangedData]);
  return (
    <PostContext.Provider
      value={{
        data,
        setData,
        isChangedData,
        setIsChangedData,
        selectedPost,
        setSelectedPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostContext = () => {
  return useContext(PostContext);
};
