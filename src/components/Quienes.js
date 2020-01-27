import React from '../../node_modules/react';
import catalina from '../images/catalina.jpg';
import abelino from '../images/abelino.jpg';

const Quienes = () => {
  return (
    <div id="Nosotros">
      <div className="Bar"></div>
      <div className="tercero">
        <div className="titulo"><h5>Nosotros</h5></div>
        <div className="texto">
          <p>
          Nuestro equipo cuenta con vasta experiencia en proyectos de Data Science 
          y Machine Learning, tanto en Chile como en el extranjero.
          </p>

          <p>      
          Nuestro equipo fue ganador del Challenge organizado por Walmart Chile 
          “Predicción de demandas para promociones”. 
          
          De más de 40 equipos participantes, fuimos seleccionados como ganadores, 
          permitiendo implementar nuestra propuesta para la toma de decisiones de la empresa.
          </p>
        </div>
        <div className="integrantes">
          <div className="card2">
            <h4>
            <img src={abelino} className="foto" alt="Abelino Jiménez" />Abelino Jiménez
            </h4>
            <span className="prueba">
            PhD Electrical and Computer Engineering. <br/>
            Carnegie Mellon University<br/>
            Msc Electrical and Computer Engineering. <br/>
            Carnegie Mellon University<br/>
            Ingeniero Civil Matemático. <br/>
            Universidad de Chile
            </span>
          </div>
          <div className="card2">
            <h4>
            <img src={catalina} className="foto" alt="Catalina Espinoza" />Catalina Espinoza
            </h4>
            <span className="prueba">
            Magíster en Ciencias mención Computación. <br/>
            Universidad de Chile<br/>
            Ingeniera Civil en Computación. <br/>
            Universidad de Chile
            <br/>
            <br/>
            <br/>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quienes;