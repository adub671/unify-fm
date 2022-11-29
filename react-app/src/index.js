import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import AudioProvider from "./context/Audio";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <AudioProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AudioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
