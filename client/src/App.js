import React from "react";
import Main from "./components/Main";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Route path="/" exact component={Main} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
