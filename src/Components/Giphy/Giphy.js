import React, { useContext } from "react";
import GiphySearch from "./GiphySearch";
import GiphyContent from "./GiphyContent";
import GiphyHistory from "./GiphyHistory";
import { Context } from "../../Context/Context";

const Giphy = () => {
  const {
    giphyData,
    setGiphyEndPoint,
    giphySearchHistory,
    setGiphySearchHistory,
  } = useContext(Context);

  return (
    <section>
      <GiphySearch
        setGiphyEndPoint={setGiphyEndPoint}
        setGiphySearchHistory={setGiphySearchHistory}
      />
      <GiphyHistory giphySearchHistory={giphySearchHistory} />
      <GiphyContent giphyData={giphyData} />
    </section>
  );
};

export default Giphy;
