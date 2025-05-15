import { useState } from "react"

function AgregarTarea({agregarTarea} : any) {

    const [inputValue, setInputValue] = useState('')
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        agregarTarea(inputValue)
    }
    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Ingresa tarea nueva"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
        
    )
}

export default AgregarTarea