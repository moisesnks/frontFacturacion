import React from 'react';
import './pagar2.css'

function Pagar2() {
    return (
        <div className="row pagar m-3 shadow p-1 rounded">
            <p className="fw-bold text-light">Como desea pagar?</p>
            <hr />
            <div className="col-auto m-2">
                <button type="button" className="btn btn-warning">
                    <img src="./img/Tarjeta.png" alt="" className="tarjetas" />
                </button>
                <div id="boxloading"></div>
            </div>
            <div className="col-auto m-2">
                <button type="button" className="btn btn-warning">
                    <img src="./img/webpay.png" alt="" className="webpay" />
                </button>
                <div id="boxloading"></div>
            </div>
            <div className="col-auto m-2">
                <button type="button" className="btn btn-warning">
                    <img src="./img/Tarjeta.png" alt="" className="tarjetas" />
                </button>
                <div id="boxloading"></div>
            </div>
            <div className="col-auto m-2">
                <button type="button" className="btn btn-warning">
                    <img src="./img/Tarjeta.png" alt="" className="tarjetas" />
                </button>
                <div id="boxloading"></div>
            </div>
            <div className="col-auto m-2">
                <button type="button" className="btn btn-warning">
                    <img src="./img/Tarjeta.png" alt="" className="tarjetas" />
                </button>
                <div id="boxloading"></div>
            </div>
            <div className="col-auto m-2">
                <button type="button" className="btn btn-warning">
                    <img src="./img/Tarjeta.png" alt="" className="tarjetas" />
                </button>
                <div id="boxloading"></div>
            </div>
            <hr />
            <p className="text-light">¿Tienes cupón de descuento?</p>
        </div>
    );
}

export default Pagar2;
