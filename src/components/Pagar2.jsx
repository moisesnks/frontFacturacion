import React from 'react';
import './pagar2.css';

function Pagar2() {
  return (
    <div className="row pagar m-3 shadow p-1 rounded">
      <p className="fw-bold text-light">Como desea pagar?</p>
      <hr />
      <div className="col-auto m-2 box">
        <img
          src="/webpay.svg"
          alt="WebPay Logo"
          className="imagen-webpay" /* Asigna la clase CSS a la imagen */
        />
        <div id="boxloading"></div>
      </div>
      <div className="col-auto m-2 box">
        <img
          src="/PayPal.svg"
          alt="PayPal Logo"
          className="imagen-webpay" /* Asigna la clase CSS a la imagen */
        />
        <div id="boxloading"></div>
      </div>
      <hr />
      <p className="text-light">¿Tienes cupón de descuento?</p>
    </div>
  );
}

export default Pagar2;