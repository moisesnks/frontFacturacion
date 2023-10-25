import { useState } from 'react'
import './App.css'
import Compra from './components/Compra'
import Hospedaje from './components/Hospedaje'
import Pasajero from './components/Pasajero'
import Servicio from './components/Servicio'
import TotalPago from './components/TotalPago'
import Pagar2 from './components/Pagar2'
import Footer from './components/Footer'
import Button from 'react-bootstrap/Button'
import reservaMock from './mocks/reserva'

function App() {
  const [count, setCount] = useState(0)

  const handleBuscarClick = async () => {
    console.log(reservaMock);
    }
  return (
    <>
      <div className="container font">
      <div className="row">
          <div className="col-md-6 left">
            <Pagar2></Pagar2>
            <Pasajero></Pasajero>
            
            
          </div>
          <div className="col-md-6 rigth">
            <TotalPago objeto={reservaMock} />
            <Compra objeto={reservaMock} />
            <Servicio></Servicio>
            <Hospedaje objeto={reservaMock} />

            <div className="btn">

            <Button className="buscar" variant="warning" onClick={handleBuscarClick}>
            CONFIRMAR DATOS INGRESADOS
           </Button>

      </div>
            
            
            
          </div>
      </div>
      
    </div>
    <div className='container-footer'>
        <Footer />
      </div>
    </>
  )
}

export default App
