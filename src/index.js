import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ScrollToTop from "react-scroll-to-top";
import reportWebVitals from "./reportWebVitals";
import { CartProvider } from "./components/Context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App /> <ScrollToTop smooth color="#f2f0f5" />
    </CartProvider>
  </React.StrictMode>
);

reportWebVitals();
