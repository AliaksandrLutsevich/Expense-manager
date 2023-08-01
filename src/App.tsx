import React from "react";
import Button from "./components/reusable/Button";
import Input from "./components/reusable/Input";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Input type="text" placeholder="Enter value" className="mb-2" />
      <Button onClick={() => console.log("Added")}>Add</Button>
    </div>
  );
}

export default App;
