import React, { Component } from 'react';
import '../App.css';
import logo from '../acacia_regular.png';
import Portada from './Portada';
import Quienes from './Quienes';
import Servicios from './Servicios';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class Presentacion extends Component {
    render() {
      return (
        <div className="App">
            <div className="App-header">
                <div id="App-logo">
                    <img src={logo} className="logo-image" alt="logo" />
                </div>
                <ul className="navigation">
                    <li><a href="#Servicios">Servicios</a></li>
                    <li><a href="#Nosotros">Nosotros</a></li>
                    <li>
                        <Link to={'/Login'}><Button id="boton-inicio" variant="contained" color="primary">Iniciar sesión</Button></Link>
                    </li>
                </ul>
            </div>
            <Portada/>
            <Servicios/>
            <Quienes/>
            <div className="Bar"></div>
            <div className="Barfoot"><div className="footnote">contacto@acacia.cl</div></div>
        </div>
      );
    }
  } 
  
  export default Presentacion;
  