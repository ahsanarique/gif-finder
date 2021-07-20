import React from "react";

const RedditHeader = () => {
  const headerBg = {
    backgroundColor: "#18181a",
    maxHeight: "330px",
  };

  const headerImg = {
    maxWidth: "50%",
  };

  return (
    <header style={headerBg} className="d-flex justify-content-center">
      <img
        style={headerImg}
        src="https://i.ibb.co/znTdd5h/reddit-icon.png"
        alt="reddit-header"
      />
    </header>
  );
};

export default RedditHeader;
