import React, { useContext } from "react";
import RedditContent from "./RedditContent";
import RedditSearch from "./RedditSearch";
import { Context } from "../../Context/Context";

const Reddit = () => {
  const {
    redditData,
    setRedditData,
    setRedditEndPoint,
    setRedditSearchHistory,
  } = useContext(Context);

  return (
    <section>
      <RedditSearch
        setRedditEndPoint={setRedditEndPoint}
        setRedditSearchHistory={setRedditSearchHistory}
        setRedditData={setRedditData}
      />
      <RedditContent redditData={redditData} />
    </section>
  );
};

export default Reddit;
