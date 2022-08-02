import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Hello");
  useEffect(() => {
    setMsg("Welcome");
  });
  return (
    <div className="App">
      <h1>{msg}</h1>
    </div>
  );
}

export default App;
