import React, { useState, useEffect } from "react";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [giphyEndPoint, setGiphyEndPoint] = useState("trending");
  const [giphySearchHistory, setGiphySearchHistory] = useState([]);
  const [giphyData, setGiphyData] = useState([]);

  useEffect(() => {
    const giphyKey = process.env.REACT_APP_GIPHY_KEY;

    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${giphyEndPoint}&limit=20&offset=0&rating=G&lang=en`;

    const getData = async (url) => {
      try {
        const response = await axios.get(url);
        setGiphyData(response.data.data);
      } catch (error) {
        alert(error.message);
      }
    };

    getData(giphyUrl);
  }, [giphyEndPoint]);

  return (
    <Context.Provider
      value={{
        giphyData,
        setGiphyEndPoint,
        giphySearchHistory,
        setGiphySearchHistory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
