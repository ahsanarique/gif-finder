import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const RedditHistory = () => {
  const { redditSearchHistory, setRedditEndPoint } = useContext(Context);

  const textColor = {
    color: "#ff4500",
  };

  return (
    <div className="list-group mt-2">
      {redditSearchHistory.map((history) => (
        <button
          key={history + Math.random(100)}
          onClick={() => setRedditEndPoint(history)}
          style={textColor}
          className="fs-4 fw-bold fst-italic list-group-item list-group-item-action"
        >
          <span className="me-3">#</span> {history}
        </button>
      ))}
    </div>
  );
};

export default RedditHistory;
