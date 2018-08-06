import React, { Component } from "react";
import { Provider } from "react-redux";
import Routes from "./../src/routes";
import store from "./store/store";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Routes />
        </div>
      </Provider>
    );
  }
}

export default App;
