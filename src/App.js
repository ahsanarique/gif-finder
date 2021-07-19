import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Giphy from "./Components/Giphy/Giphy";
import Reddit from "./Components/Reddit/Reddit";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Giphy />
          </Route>
          <Route path="/reddit">
            <Reddit />
          </Route>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
