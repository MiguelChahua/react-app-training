import './PrimerComponente.css'

const string = 'Esto es un texto'
const number = 123456
const array = ['Curso de React', 4, true]
const boolean = true
const funcion = () => 1+1
const objeto = { nombre: 'Curso de JS', duracion: 4}
const fecha = new Date()

function PrimerComponente () {
    return (
        <>
            <h1>{string}</h1>
            <h1>{number}</h1>
            <h1>{array}</h1>
            {/* No sale nada con boolean react no lo reconoce */}
            <h1>{boolean}</h1>
            <h1>{funcion()}</h1>
            <h4>{objeto.nombre}</h4>
            <h1>{ JSON.stringify(objeto) }</h1>
            <h1>{fecha.getDate()}</h1>
        </>   
    )
}

export default PrimerComponente