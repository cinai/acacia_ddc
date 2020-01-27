import React from '../../node_modules/react';
import Media from '../../node_modules/react-media';
import videoPortada from '../videos/Pexels.mp4';

const Portada = () => {
  const texto1 = "Acacia nace para colaborar con las empresas en el desarrollo y creación de mejores soluciones basadas en Machine Learning e Inteligencia Artificial." 
  const texto2 = "A través de la optimización y automatización de procesos, apoyamos la toma de decisiones y la integración de las soluciones al ecosistema del negocio. " 

  //"Acacia ofrece soluciones de Inteligencia Artificial para automatizar y optimizar procesos de su compañía, apoyando y mejorando la toma de decisiones. Integramos soluciones al ecosistema de su negocio, con énfasis en la experiencia de usuario."
  
  return (
    <div>
      <Media query="(max-width: 767px)">
        {matches =>
          matches ? (
            <div className="primer">
              <span className="text-header2">
                  <h3>Machine Learning para<br/> Business Intelligence </h3>
              </span>
              <span className="text-header1">
                { texto1 }
                <br/>
                { texto2 }
              </span>
            </div>
          ) : (
            <div>
              <div className="primer">
                <video id="videobcg" className="video" preload="auto" autoPlay="(true)" loop="loop" muted="muted" volume="0">
                    <source src={videoPortada} type="video/mp4"></source>
                    Sorry, your browser does not support HTML5 video.
                </video>
                <header className="viewport-header">
                  <div className="text-header1">
                    <div className="text-header1-texto">
                      { texto1 }
                    <br/>
                    </div>
                    <div className="text-header1-texto">
                      { texto2 }
                    </div>
                  </div>
                  <span className="text-header2">
                    <h3>Machine Learning para<br/> Business Intelligence </h3>
                  </span>
                </header>
              </div>
            </div>
          )
        }
      </Media>
    </div>
   ) 
  }

export default Portada;