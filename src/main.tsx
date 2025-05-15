import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
//import LikesCounter from './components/LikesCounter.tsx'
import SaludoPersonalizado from './components/SaludoPersonalizado.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SaludoPersonalizado/>
  </React.StrictMode>,
)
