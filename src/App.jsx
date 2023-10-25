import { useState } from 'react'
import './App.css'
import Compra from './component/Compra'
import Hospedaje from './component/Hospedaje'
import Pasajero from './component/Pasajero'
import Servicio from './component/Servicio'
import TotalPago from './component/TotalPago'
import Pagar2 from './component/Pagar2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="container font">
      <div class="row">
          <div class="col-md-6 left">
            <Pagar2></Pagar2>
            <Pasajero></Pasajero>
            
            
          </div>
          <div class="col-md-6 rigth">
            <TotalPago></TotalPago>
            <Compra></Compra>
            <Servicio></Servicio>
            <Hospedaje></Hospedaje>
            
            
            
          </div>
      </div>
      
    </div>
    </>
  )
}

export default App
