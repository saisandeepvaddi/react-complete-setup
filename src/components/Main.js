import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "../store";

const Main = () => {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" render={() => <h1>Main</h1>} />
      </Router>
    </Provider>
  );
};

export default Main;
