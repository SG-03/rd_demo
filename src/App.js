import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [msg, setMsg] = useState("Hello");
  useEffect(() => {
    setMsg("Welcome");
  });
  return <div className="App">{msg}</div>;
}

export default App;
