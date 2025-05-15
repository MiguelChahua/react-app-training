import { useState } from "react"

function SaludoPersonalizado() {
  const [nombre,setNombre] = useState('')
  const [saludo,setSaludo] = useState('')

  const handleInputChange = (e : any) => {
    setNombre(e.target.value);
  };

  const saludar = () => {
    setSaludo(`Hola ${nombre}`)
  }

  return (
    <>
      <label>Ingresa tu nombre</label>
      <input type="text" value={nombre} onChange={handleInputChange}/>
      <button onClick={saludar}>Enviar</button>
      {saludo && <p>{saludo}</p>}
    </>
  )
}

export default SaludoPersonalizado
