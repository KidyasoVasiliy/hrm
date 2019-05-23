import React from "react";
import ReactDOM from "react-dom";
import Login from "./module/Login";
import "./styles.less";

function App() {
  return <Login />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
