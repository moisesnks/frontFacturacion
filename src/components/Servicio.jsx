import React, { useState } from 'react';
import './servicio.css';

function Servicio() {
  const [selectedServices, setSelectedServices] = useState([]); // Estado para rastrear los servicios seleccionados

  const handleServiceChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedServiceNames = selectedOptions.map((option) => option.value);
    setSelectedServices(selectedServiceNames);
  };

  return (
    <div className="row servicio m-3 shadow rounded">
      <div className="flex">
        <i className="bi bi-ticket-detailed plane"></i>
        <p className="fw-bold text-light">Servicios adicionales</p>
      </div>
      <hr />
      <div>
        <label htmlFor="serviceSelect" className="text-light">
          Selecciona los servicios adicionales:
        </label>
        <select
          id="serviceSelect"
          multiple
          onChange={handleServiceChange}
          value={selectedServices}
          className="form-select"
        >
          <option value="Agrega más equipaje">Agregar más equipaje</option>
          <option value="Contratar seguros de vida">Contratar seguros de vida</option>
          <option value="Embarque de auto">Embarque de auto</option>
        </select>
      </div>
      <div className="text-light mt-2">
        Servicios seleccionados: {selectedServices.join(", ")}
      </div>
    </div>
  );
}

export default Servicio;
