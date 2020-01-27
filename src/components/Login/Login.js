import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import logo from '../../images/LogoAcacia_Imagen.png';
import Redirect from 'react-router-dom';

class Login extends Component {
    state = { 
        email: '',
        password: ''
    }

    // iniciar sesión en firebase
    iniciarSesion = e => {
        e.preventDefault();
        this.props.history.push('/plataforma');

        // // extraer firebase
        // const { firebase } = this.props

        // // extraer el state
        // const { email, password } = this.state;

        // // autenticar el usuario
        // firebase.login({
        //     email, 
        //     password
        // })
        // .then(resultado => console.log('Iniciaste sesión'))
        // .catch(error => {
        //     document.querySelector('input').style.borderColor = '#df5d7c'
        // })
    }

    // Almacena lo que el usuario escribe en el state
    leerDatos = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }


    render() { 
        return (
            <div>
                <img src={logo} className="logo-image-inicio" alt="logo" />
                <div className="login">
                    <div className="card caja-login">
                        <div className="card-body">
                            <h2 className="card-header">
                                <FontAwesomeIcon icon={faUser} />
                                Ingrese sus datos
                            </h2>

                            <form
                                onSubmit={this.iniciarSesion}
                                className="formulario"
                            >
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        required
                                        value={this.state.email}
                                        onChange={this.leerDatos}
                                    />
                                </div>

                                <div className="form-group">
                                    <label>Password:</label>
                                    <input 
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        required
                                        value={this.state.password}
                                        onChange={this.leerDatos}
                                    />
                                </div>

                                <Button 
                                    type="submit"
                                    id="boton-inicio-sesion"
                                    variant="contained" color="primary"
                                >Iniciar Sesión</Button>
                            </form>
                            <div className="card-footer">Al iniciar sesión acepta nuestros <a href="https://www.acacia.cl">Términos y condiciones</a>.</div>
                            <div className="card-footer">¿No está registrado? <a href="https://www.acacia.cl">Crear cuenta</a></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
Login.propTypes = {
    firebase : PropTypes.object.isRequired
}
 
export default firebaseConnect()(Login);