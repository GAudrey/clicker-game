import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./assets/images/sgn_duck_300.png"

import Header from "./components/Header.jsx";
import SighDuck from "./components/SighDuck.jsx";
import IdleDuck from "./components/IdleDuck.jsx";

const app = document.querySelector("#app");

ReactDOM.render(
    <>
        <Header />
        <SighDuck />
        <IdleDuck />
    </>,
    app
);
