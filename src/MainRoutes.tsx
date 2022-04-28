import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Counter } from "./Counter";
import { Example } from "./Example";

export const ExampleRouter = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/counter" element={<Counter></Counter>} >
        </Route>
        <Route path="/example/:id" element={<Example></Example>}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}