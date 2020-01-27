import React from 'react';
import './Inicio.css'
import BarraLateral from './BarraLateral';
import Plataforma from './Plataforma';


const Inicio = props => (<div className="main">
        <BarraLateral></BarraLateral>
        <Plataforma></Plataforma>
    </div>)


export default Inicio;