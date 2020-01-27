import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faDownload } from '@fortawesome/free-solid-svg-icons';
import './Datos.css'
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Datos 1', 'Producción 2018-2019','12/08/2019', '20%', '20%'),
  createData('Datos 2', 'Producción 2019-2020 actualizado','23/01/2019', '10%', '20%'),
];

const Datos = props => {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Descripción</TableCell>
              <TableCell align="right">Fecha</TableCell>
              <TableCell align="right">Validación</TableCell>
              <TableCell align="right">Test</TableCell>
              <TableCell align="right">Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
                <TableCell align="right">
                  <div className="iconos-crud">
                    <FontAwesomeIcon icon={faTrash} size="lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faDownload} size="lg"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faEdit} size="lg"></FontAwesomeIcon>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <div id="boton-datos">
          <Button variant="contained" color="primary">Subir Datos</Button>
        </div>
      </div>
    </div>
  );
}

export default Datos;
