import React from "react";
import "./giphyContent.css";

const GiphyContent = ({ giphyData }) => {
  const gifCard = {
    borderRadius: "10px",
    width: "18rem",
    height: "20rem",
  };

  const gifSize = {
    height: "200px",
  };
  return (
    <div className="d-flex mb-5 justify-content-center flex-wrap">
      {giphyData.map((gif) => (
        <a
          key={gif.id}
          style={{ textDecoration: "none" }}
          href={gif.bitly_url}
          target="_blank"
          rel="noreferrer"
        >
          <div
            style={gifCard}
            className="card m-2 d-flex align-items-center justify-content-center bg-dark text-light text-center animated"
          >
            <div className="w-100 mt-2">
              <img
                style={gifSize}
                src={gif.images.preview_gif.url}
                className="card-img-top p-2 w-75"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{gif.title}</h5>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default GiphyContent;
