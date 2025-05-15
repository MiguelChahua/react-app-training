// Contador de Likes

import { useState } from "react"

function LikesCounter() {
  const [contador,setContador] = useState(0)
  const setLike = () => {
    setContador(contador+1)
  }
  const disLike = () => {
    setContador(contador-1)
  }
  return (
    <>
      <h1>Likes: {contador}</h1>
      <button onClick={setLike}>Like</button>
      <button onClick={disLike} disabled={contador === 0}>Dislike</button>
      {contador >= 10 && <p>¡Gracias por tu apoyo!</p>}

    </>
  )
}

export default LikesCounter
