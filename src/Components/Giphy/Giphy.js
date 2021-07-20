import React, { useContext } from "react";
import GiphySearch from "./GiphySearch";
import GiphyContent from "./GiphyContent";
import { Context } from "../../Context/Context";

const Giphy = () => {
  const { giphyData, setGiphyData, setGiphyEndPoint, setGiphySearchHistory } =
    useContext(Context);

  return (
    <section>
      <GiphySearch
        setGiphyEndPoint={setGiphyEndPoint}
        setGiphySearchHistory={setGiphySearchHistory}
        setGiphyData={setGiphyData}
      />

      <GiphyContent giphyData={giphyData} />
    </section>
  );
};

export default Giphy;
