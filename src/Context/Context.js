import React, { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
// import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  const [giphyEndPoint, setGiphyEndPoint] = useState("trending");
  const [giphySearchHistory, setGiphySearchHistory] = useState(["trending"]);
  const [giphyData, setGiphyData] = useState([]);

  useEffect(() => {
    const apiKey = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

    const getData = async (key) => {
      try {
        const gifs = await key.search(giphyEndPoint, {
          sort: "relevant",
          lang: "es",
          limit: 18,
          type: "gifs",
        });

        setGiphyData(gifs.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData(apiKey);
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
