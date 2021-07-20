import React from "react";
import { Spinner } from "react-bootstrap";

const RedditContent = ({ redditData }) => {
  const gifCard = {
    borderRadius: "10px",
    width: "18rem",
    height: "20rem",
  };

  const gifSize = {
    height: "200px",
  };

  const manageTitle = (title) => {
    if (title.length > 50) {
      const titleShortened = title.split("").slice(0, 46).join("") + "....";
      return titleShortened;
    } else return title;
  };

  return (
    <div className="d-flex mb-5 justify-content-center flex-wrap">
      {redditData.length < 1 && <Spinner animation="border" variant="dark" />}
      {redditData.map((item) => (
        <a
          key={item.id}
          style={{ textDecoration: "none" }}
          href={item.url}
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
                src={item.thumbnail}
                className="card-img-top mt-2 w-75"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{manageTitle(item.title)}</h5>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RedditContent;
