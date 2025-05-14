import { useState } from "react"

interface ContadorProps {
  value: number
}

function Contador({value}:ContadorProps) {

  const [ contador, setContador ] = useState(value)

  const handleClick = () => {
      setContador(contador+1)
    }
  return ( 
    <>
      <h1>Contador: </h1>
      <p>{contador}</p>
      <button onClick={handleClick}>
        Soy un botón
      </button>
    </>
   )
}

export default Contador