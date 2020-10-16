import React from "react";
import "./App.css";
import SigmaDemo from "./components/SigmaWrapper/SigmaDemo";

function App() {
  return (
    <div className="App">
      <SigmaDemo maxNodesExponent={5} maxEdgesExponent={5} />
    </div>
  );
}

export default App;
