import '../style.css'

type PropsType = {
  titulo: string
  subtitulo: string
}

function Props ({titulo , subtitulo} : PropsType) {
  return (
    <>
      <h1>{titulo}</h1>
      <h2>{subtitulo}</h2>
    </>
  )
}

export default Props

