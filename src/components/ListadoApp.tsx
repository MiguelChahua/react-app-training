import { useState } from "react"

const Items = ({nombre,visto} : {nombre: string,visto: boolean}) => {
  return(
    <li>{nombre} {visto? '✅' : '❌'}</li>
  )
}

function ListadoApp(){
  const addTask = () => {
    setArreglo([...arreglo, {nombre: 'Nuevo', visto: false}])
  }

  let listadoSecciones = [
    { nombre:"Instalaciones del React", visto: true },
    { nombre:"Uso de Vite", visto: true },
    { nombre:"Componentes", visto: true },
    { nombre:"Variables de TSX", visto: true },
    { nombre:"Props", visto: true },
    { nombre:"Eventos", visto: true },
    { nombre:"useState", visto: true },
    { nombre:"Redux", visto: true },
    { nombre:"customHooks", visto: true }
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)
  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <ol>
        {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>

      <button onClick={() => addTask()}>Agregar Tarea</button>
    </>
  )
}

export default ListadoApp