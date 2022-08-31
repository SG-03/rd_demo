import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("hi");
  useEffect(() => {
    console.log("hello");
  });
  return <div></div>;
}

export default App;
