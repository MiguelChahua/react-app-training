import { useState } from "react"
import AgregarTarea from "./AgregarTarea"

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
    { nombre:"Redux", visto: false },
    { nombre:"customHooks", visto: false }
  ]
  const [arreglo, setArreglo] = useState(listadoSecciones)

  const onAgregarTarea = (val : any) => {
    if( val < 1 ) return
    const envio = {
      nombre: val,
      visto: false
    }
    setArreglo([...arreglo,envio])
  }

  return (
    <>
      <h1>Listado de Temas del Curso</h1>
      <AgregarTarea agregarTarea={onAgregarTarea}></AgregarTarea>
      <ol>
        {arreglo.map(item => <Items key={item.nombre} nombre={item.nombre} visto={item.visto}></Items>)}
      </ol>
    </>
  )
}

export default ListadoApp