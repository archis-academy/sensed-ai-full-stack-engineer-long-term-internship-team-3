import React from "react";
import ReactDOM from "react-dom/client";
import "@src/main.scss";
import PrimaryHeader from "./components/PrimaryHeader/PrimaryHeader";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <PrimaryHeader />
  </React.StrictMode>
);