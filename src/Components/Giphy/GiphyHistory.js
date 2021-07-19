import React, { useContext } from "react";
import { Context } from "../../Context/Context";

const GiphyHistory = () => {
  const { giphySearchHistory, setGiphyEndPoint } = useContext(Context);

  const textColor = {
    color: "#8B5CF6",
  };

  return (
    <div className="list-group mt-2">
      {giphySearchHistory.map((history) => (
        <button
          key={history + Math.random(100)}
          onClick={() => setGiphyEndPoint(history)}
          style={textColor}
          className="fs-4 fw-bold fst-italic list-group-item list-group-item-action"
        >
          {history}
        </button>
      ))}
    </div>
  );
};

export default GiphyHistory;
