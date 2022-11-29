import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import configureStore from "./store";
import AudioProvider from "./context/Audio";
import { ModalProvider } from "./context/Modal";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <AudioProvider>
      <ModalProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ModalProvider>
    </AudioProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
