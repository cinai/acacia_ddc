import React from 'react';

const Servicios = () => {
  return (
    <div  id="Servicios">
      <div className="Bar"></div>
      <div className="segundo">
      <header className="viewport-header2">
        <span className="text-header3">
          <p>
          Combinamos los últimos avances en Machine Learning para crear mejores soluciones
          </p>
        </span>
        <span className="text-header4">
          <div className="card">
            <h4>
              Predicción de Demanda
            </h4>
            <span className="prueba">
              Determinar la demanda futura por períodos para la planificación productiva y comercial.
            </span>
          </div>
          <div className="card">
            <h4>
              Segmentación de Clientes
            </h4>
            <span className="prueba">
              Identificación de las características que describen el negocio y que permiten ofrecer un mejor servicio
            </span>
          </div>
          <div className="card">
            <h4>
              Customer Targeting
            </h4>
            <span className="prueba">
            Optimización para el proceso de planificación de venta, promociones u ofertas a potenciales clientes en base a datos históricos de consumo y compra de servicios/productos.
            </span>
          </div>
        </span>
      </header>
    </div>

    </div>
  )
}

export default Servicios;