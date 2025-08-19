import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Authorization } from "./components/authorization/authorization";
import reportWebVitals from "./reportWebVitals";
import {
  getQuestions,
  postQuestion,
  listen,
  getPSWD
} from "./components/firebase/Firebase";
import { FirebaseContext } from "./components/firebase/FirebaseContext";
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ getQuestions, postQuestion, listen, getPSWD }}>
      <Authorization>
        <App />
      </Authorization>
    </FirebaseContext.Provider>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
