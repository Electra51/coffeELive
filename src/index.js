import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScrollToTop from "react-scroll-to-top";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App /> <ScrollToTop smooth color="#f2f0f5" />
  </React.StrictMode>
);

reportWebVitals();
