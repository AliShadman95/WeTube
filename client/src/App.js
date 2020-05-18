import React from "react";
import Main from "./components/Main";
import VideoPageContent from "./container/videoPage/VideoPageContent.jsx";
import SearchPageContent from "./container/searchPage/SearchPageContent.jsx";

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
          <Route path="/search/:videoId" exact component={SearchPageContent} />
          <Route path="/video" exact component={VideoPageContent} />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
