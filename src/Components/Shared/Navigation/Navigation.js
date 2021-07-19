import React from "react";
import { Link } from "react-router-dom";
import GiphyHistory from "../../Giphy/GiphyHistory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const buttonStyle = {
    zIndex: "1000",
  };

  const linkRemover = {
    textDecoration: "none",
  };

  const navBar = <FontAwesomeIcon icon={faBars} size="2x" color="#8B5CF6" />;

  return (
    <React.Fragment>
      <button
        style={buttonStyle}
        className="btn btn-transparent position-fixed top-0 end-0 mt-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        {navBar}
      </button>

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header ms-auto">
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body text-center">
          <div className="list-group">
            <Link style={linkRemover} to="/">
              <button
                className="list-group-item list-group-item-action fs-3 fst-italic mb-2"
                type="button"
              >
                Giphy
              </button>
            </Link>
            <Link style={linkRemover} to="/reddit">
              <button
                className="list-group-item list-group-item-action fs-3 fst-italic"
                type="button"
              >
                Reddit
              </button>
            </Link>

            <div className="mt-5">
              <h5 className="fs-3">Search History</h5>
              <GiphyHistory />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
