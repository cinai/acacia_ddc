import React, {useState, useEffect} from 'react';
import './Prediccion.css';
import LineChart from '../LineChart';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync, faFileDownload } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ExcelDownload from '../ExcelDownload/ExcelDownload';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const Prediccion = () => {

  const [prediccion, setPrediccion] = useState([435, 389, 650, 701, 743, 1230, 1454, 1670, 1398, 1240, 1050, 821])
  
  const classes = useStyles();

  return (
    <div className="contenedor">
      <Card className={classes.card+" contenedor-grafico"}>
        <CardContent>
          <Typography variant="h5" component="h2">
            Generar predicción por SKU
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Seleccionar modelo y SKU
          </Typography>
          <Typography variant="body2" component="p">
            <div className="contenedores-inputs">
              <div className="contenedor-inputs">
                <label htmlFor="Fase">Seleccionar modelo:</label>
                <select id="Fase">
                  <option value="Modelo 1">{"Modelo 1"}</option>
                  <option value="Modelo 2">{"Modelo 2"}</option>
                </select>
              </div>
              <div className="contenedor-inputs">
                <label htmlFor="Tipo de Material">SKU:</label>
                <select id="input_tipom">
                  <option value="SKU 1">{"SKU 1"}</option>
                  <option value="SKU 2">{"SKU 2"}</option>
                  <option value="SKU 3">{"SKU 3"}</option>
                  <option value="SKU 4">{"SKU 4"}</option>
                </select>
              </div>
            </div>
          </Typography>
          <div className="grafico">
            <LineChart
              prediccion={prediccion}
            />
        </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            Generar predicción para todos los SKU
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Seleccionar modelo y SKU
          </Typography>
          <Typography variant="body2" component="p">
            <div className="contenedores-inputs">
              <div className="contenedor-inputs">
                <label htmlFor="Fase">Seleccionar modelo:</label>
                <select id="Fase">
                  <option value="Modelo 1">{"Modelo 1"}</option>
                  <option value="Modelo 2">{"Modelo 2"}</option>
                </select>
              </div>
            </div>
          </Typography>
          <div className="boton-descarga">
            {/* <Button variant="contained" color="primary"> <FontAwesomeIcon icon={faFileDownload} size="lg"></FontAwesomeIcon>Descargar predicciones</Button> */}
            <ExcelDownload></ExcelDownload>
          </div>
        </CardContent> 
      </Card>
    </div>
  );
};

export default Prediccion;