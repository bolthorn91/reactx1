import { useState, useEffect } from "react";
import { Example } from "./Example";
import "./App.css";
import { Counter } from "./Counter";
import { ExampleRouter } from "./ExampleRouter";

function App() {
  const [isDone, setIsDone] = useState(false)


  useEffect(() => {
  }, [isDone])
  
  return (
    <div className="App">
      <ExampleRouter />
    </div>
  );
}

export default App;