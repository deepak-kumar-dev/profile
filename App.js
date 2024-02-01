import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

export default function App() {
    return (
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    )
  }

const react = ReactDOM.createRoot(document.getElementById("root"));

react.render(App());
