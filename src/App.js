import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./Components/Shared/Navigation/Navigation";
import GiphyHeader from "./Components/Header/GiphyHeader";
import RedditHeader from "./Components/Header/RedditHeader";
import Giphy from "./Components/Giphy/Giphy";
import Reddit from "./Components/Reddit/Reddit";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Navigation />
      <main>
        <Switch>
          <Route exact path="/">
            <GiphyHeader />
            <Giphy />
          </Route>
          <Route path="/reddit">
            <RedditHeader />
            <Reddit />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
