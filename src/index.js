import React from "react"; // import the react
import ReactDOM from "react-dom/client"; //import the react-dom client and then import style index css
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
