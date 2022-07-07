import React from "react";
import TopBar from "./components/TopBar/TopBar";
import Books from "./components/Books/Books";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Books/>
    </div>
  );
}

export default App;
