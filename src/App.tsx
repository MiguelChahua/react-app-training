// import Titulo from './Titulo'
import Card, {CardBody} from './components/Card' // Aqui se agrega llaves ya que CardBody no esta por defecto y se le pone para importarlo como named export...

function App() {
  //return <Titulo/>
  return <Card>
      <CardBody title='Hola mundo' text='Este es el texto'/>
    </Card> // ctrl+Espacio te da las propiedades del elemento
}
export default App