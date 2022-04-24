import React from "react";

export const ClassTimerFunctional = (cosa: {name: string, apellido: string}): JSX.Element => {
  const edad = 20;
  return (
    <div>
      <p>name:  {cosa.apellido}  {cosa.name}</p>
      <p>holaaaaa: {cosa.apellido}</p>
      <p>edad: {edad}</p>
    </div>
  )
}
  