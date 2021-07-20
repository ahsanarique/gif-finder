import React, { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";
import axios from "axios";

const Context = React.createContext(null);

const ContextProvider = ({ children }) => {
  // giphy
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

  // reddit
  const [redditEndPoint, setRedditEndPoint] = useState("gifs");
  const [redditSearchHistory, setRedditSearchHistory] = useState(["gifs"]);
  const [redditData, setRedditData] = useState([]);

  useEffect(() => {
    const redditUrl = `https://api.pushshift.io/reddit/search/submission/?q=${redditEndPoint}&limit=18&is_video=true&over_18=false`;

    const getData = async (url) => {
      try {
        const response = await axios.get(url);
        setRedditData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData(redditUrl);
  }, [redditEndPoint]);

  console.log(redditData);

  return (
    <Context.Provider
      value={{
        giphyData,
        setGiphyData,
        setGiphyEndPoint,
        giphySearchHistory,
        setGiphySearchHistory,
        redditData,
        setRedditData,
        setRedditEndPoint,
        redditSearchHistory,
        setRedditSearchHistory,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
