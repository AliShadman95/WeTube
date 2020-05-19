import React from "react";
import Main from "./container/homepage/Main";
import VideoPageContent from "./container/videoPage/VideoPageContent.jsx";
import VerticalListPages from "./container/verticalListPages/VerticalListPages.jsx";

import "./styles/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Menu from "./components/menu/Menu.jsx";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Menu />
        <Router>
          <Route path="/" exact component={Main} />
          <Route path="/trends" exact component={VerticalListPages} />
          <Route
            path="/search/:searchValue"
            exact
            component={VerticalListPages}
          />
          <Route path="/video" exact component={VideoPageContent} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
