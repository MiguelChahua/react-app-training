import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
//import LikesCounter from './components/LikesCounter.tsx'
//import SaludoPersonalizado from './components/SaludoPersonalizado.tsx'
// import { Secciones } from './Secciones.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
