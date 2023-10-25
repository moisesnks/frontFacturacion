import React from 'react';
import './totalPago.css';

function TotalPago({ objeto }) {
  // Calcula el costo total del vuelo
  const costoVuelo = objeto.precio_viaje;

  // Calcula el costo total de la estancia en el hotel
  const fechaIda = new Date(objeto.vuelo_info.fecha_ida);
  const fechaVuelta = new Date(objeto.vuelo_info.fecha_vuelta);
  const numeroDias = (fechaVuelta - fechaIda) / (1000 * 60 * 60 * 24); // Calcula el número de días
  const precioNoche = objeto.info_paquete.precio_noche;
  const costoEstanciaHotel = precioNoche * numeroDias;

  // Calcula el costo total
  const costoTotal = costoVuelo + costoEstanciaHotel;

  return (
    <div className="row total m-3 shadow rounded">
      <div className="h-25 color rounded-top">
        <div className="flex">
          <p className="fw-bold text-light">Total vuelo</p>
          <i className="bi bi-airplane-fill plane"></i>
        </div>
        <span className="text-light">${costoTotal}</span>
      </div>
    </div>
  );
}

export default TotalPago;

