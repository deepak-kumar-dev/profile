import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AboutCard from "./src/Components/AboutCard";

export default function App() {
  return (
    <div className="main">
      <AboutCard></AboutCard>
    </div>
  );
}

const react = ReactDOM.createRoot(document.getElementById("root"));

react.render(App());
