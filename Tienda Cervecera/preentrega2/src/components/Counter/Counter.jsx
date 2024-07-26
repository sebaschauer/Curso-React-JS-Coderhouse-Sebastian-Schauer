import { useState } from "react"



const Counter = ({stock}) => {

    const [count, setCount] = useState(1)


    const decrement =() => {
        if (count === 0) {
            alert('Debe seleccionar al menos una unidad')
        }else{
            setCount(decrem => decrem - 1)
        }
    }

    const increment =() => {
        if (count < stock) {
            setCount(increm => increm + 1)
        }else{
            alert('No hay mas productos en stock')
        }
    }

  return (
    <div className="text-white text-center rounded fs-6 g-1 p-1">
        <button onClick={decrement} className="btn rounded bg-light" type="button">-</button>
        <span className="px-3 align-middle" > {count} </span>
        <button onClick={increment} className="btn rounded bg-light" type="button">+</button>
    </div>
  )
}

export default Counter