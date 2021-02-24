import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/Header.jsx";
import Box from "./components/Box.jsx";

const app = document.querySelector("#app");

ReactDOM.render(
    <>
        <Header />
        <Box />
    </>,
    app
);