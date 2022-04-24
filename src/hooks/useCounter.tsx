import { useEffect, useState } from "react";

export const useCounter = () => {
    const [counter, setCounter] = useState<number>(0)

    useEffect(() => {
      setTimeout(() => {
        setCounter(counter + 20)
      }, 3000);
    }, []);
}