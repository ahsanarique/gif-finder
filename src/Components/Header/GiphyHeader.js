import React from "react";

const Header = () => {
  const headerBg = {
    backgroundColor: "#18181a",
    maxHeight: "400px",
  };

  const headerGif = {
    maxWidth: "50%",
  };
  return (
    <header style={headerBg} className="d-flex justify-content-center">
      <img
        style={headerGif}
        src="https://media.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"
        alt="header-gif"
      />
    </header>
  );
};

export default Header;
