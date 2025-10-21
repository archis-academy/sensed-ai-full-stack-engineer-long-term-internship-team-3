import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/_variables.scss";
import PropertySearchForm from "./components/HeroElements/PropertySearchForm";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PropertySearchForm />
  </React.StrictMode>
);
