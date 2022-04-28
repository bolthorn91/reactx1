import { useState, useEffect } from "react";
import { Example } from "./Example";
import "./App.css";
import { Counter } from "./Counter";
import { ExampleRouter } from "./ExampleRouter";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  const { counter } = useAppContext();
  const [isDone] = useState(false)

  useEffect(() => {
  }, [isDone])

  useEffect(() => {
    console.log({counter})
  }, [counter])
  
  
  return (
    <div className="App">
      <ExampleRouter />
    </div>
  );
}

export default App;