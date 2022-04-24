import { useState } from "react"
import { AddButton } from "./components/AddButton"
import { QuantitySelector } from "./components/QuantitySelector";
import { SubtractButton } from "./components/SubtractButton"

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(1)

  return (
      <>
        <p>El contador vale :{counter}</p>
        <p>La cantidad es: {quantity}</p>
        <div style={{display: 'block'}}>
          <button onClick={() => setCounter(counter - quantity)}>Restar</button>
          <button onClick={() => setCounter(counter + quantity)}>Sumar</button>
        </div>
        <SubtractButton onAdd={() => setCounter(counter - quantity)} />
        <AddButton onAdd={() => setCounter(counter + quantity)} />
        <QuantitySelector onChange={e => setQuantity(parseInt(e.target.value))} />
      </>
  )
}