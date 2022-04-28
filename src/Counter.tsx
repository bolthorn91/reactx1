import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { AddButton } from "./components/AddButton"
import { QuantitySelector } from "./components/QuantitySelector";
import { SubtractButton } from "./components/SubtractButton"
import { useAppContext } from "./hooks/useAppContext";

export const Counter = () => {
  const {counter: counterContext, setCounter: setCounterContext} = useAppContext();
  const [counter, setCounter] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [users, setUsers] = useState([]);
  const response = async () => (await fetch('https://jsonplaceholder.typicode.com/users')).json()

  useEffect(() => {
    response().then(_users => setUsers(_users));
  }, [])

  useEffect(() => console.log({users}), [users]);

  return (
      <>
        <Link to={'/example/vengodecounter'}>Ir al ejemplo 1</Link>
        <div style={{display: 'block', marginBottom: '10px'}}>
          <p>El contador de componente Counter es: {counter}</p>
          <p>La cantidad es: {quantity}</p>
        </div>
        <SubtractButton onAdd={() => setCounter(counter - quantity)} />
        <AddButton onAdd={() => setCounter(counter + quantity)} />
        <QuantitySelector onChange={e => setQuantity(parseInt(e.target.value))} />
        <div style={{display: 'block', marginBottom: '10px'}}>
          <p>El contador del counter delcontexto Counter: {counterContext}</p>
        </div>
        <SubtractButton onAdd={() => setCounterContext(counterContext - 1)} />
        <AddButton onAdd={() => setCounterContext(counterContext + 1)} />
      </>
  )
}