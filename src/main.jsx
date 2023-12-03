import React from "react";
import ReactDOM from "react-dom/client";
import Container from "./components/Container.jsx";
import "./style.css";

// "npm run dev" to test
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Container />
  </React.StrictMode>
);
