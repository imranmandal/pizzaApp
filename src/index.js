import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import Login from "./LoginComponent/Login";

const rootElement = document.getElementById("root");
const isLoggedIn = false;
ReactDOM.render(isLoggedIn ? <App /> : <Login />, rootElement);
