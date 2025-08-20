import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Authorization } from "./components/authorization/authorization";
import {
  getQuestions,
  postQuestion,
  listen,
  getPSWD,
  postRSVP,
  getRSVPStatus,
} from "./components/firebase/Firebase";
import { FirebaseContext } from "./components/firebase/FirebaseContext";
import { BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={{ getQuestions, postQuestion, listen, getPSWD, postRSVP, getRSVPStatus  }}>
      <Authorization>
        <App />
      </Authorization>
    </FirebaseContext.Provider>
  </BrowserRouter>,

  document.getElementById("root")
);


