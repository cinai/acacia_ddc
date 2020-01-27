import React from 'react';
import './Plataforma.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Tooltip from '@material-ui/core/Tooltip';
import Datos from '../Datos/Datos';
import Modelo from '../Modelo/Modelo';
import Prediccion from '../Prediccion/Prediccion';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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

const Plataforma = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  return (
  <div className="plataforma">
    <div className="plataforma-header">
      <div className={classes.root}>
        <AppBar position="static" color="transparent">
          <div className="plataforma-proyecto">
            <div className="plataforma-titulo">
              <span className="box">
                <FontAwesomeIcon icon={faChartLine} size="lg"></FontAwesomeIcon>
              </span>
              <h3>Seguimiento y predicción de la producción</h3>
            </div>
            <div className="plataforma-user">
              <Tooltip title="Catalina Espinoza">
                <IconButton 
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    size="small"
                >
                  <FontAwesomeIcon icon={faUserCircle} size="lg" className="plataforma-user-icon" />
                </IconButton >
              </Tooltip>
              <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                          <MenuItem onClick={handleClose}> <FontAwesomeIcon icon={faSignOutAlt} size="s" />Cerrar sesión</MenuItem>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div> 
          </div>
          <Tabs 
            value={value} 
            aria-label="simple tabs example" 
            indicatorColor="primary"
            onChange={handleChange} 
          >
            <Tab label="Dashboard" {...a11yProps(0)} />
            <Tab label="Datos" {...a11yProps(1)} />
            <Tab label="Modelos" {...a11yProps(2)} />
            <Tab label="Predicción" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
      </div>
    </div>
    <div className="plataforma-cuerpo">
      <TabPanel value={value} index={0}>
        <div className="dashboard-descripcion">
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                Descripción del proyecto
              </Typography>
              <Typography variant="h5" component="h2">
                Predicción de la producción
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Por fruta y subcategoría
              </Typography>
              <Typography variant="body2" component="p">
                Permite visualizar la producción semanal y el ajuste de la producción semanal futura.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Ir a predecir!</Button>
            </CardActions>
          </Card>
        </div>
        <div className="dashboard-fila">
        <div className="dashboard-kpi">
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  KPIs del proyecto
                </Typography>
                <Typography variant="h5" component="h2">
                  Indicadores de rendimiento
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Por ejemplo por fruta u otro nivel de agrupación
                </Typography>
                <Typography variant="body2" component="p">
                  Información sobre el rendimiento de la predicción
                  <br></br>
                  Alertas sobre la producción futura
                </Typography>
              </CardContent>
            </Card>
          </div>
          <div className="dashboard-tarjeta-roja">
            <h4>2%<br></br><small> con problemas</small></h4>
            <Button variant="contained" size="small">Check!</Button>
          </div>
          <div className="dashboard-tarjeta-amarilla">
            <h4>18% <br></br><small>baja producción</small></h4>
            <Button variant="contained" size="small">Check!</Button>
          </div>
          <div className="dashboard-tarjeta-verde">
            <h4>80%<br></br> <small>producción suficiente</small></h4>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Datos></Datos>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Modelo></Modelo>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Prediccion></Prediccion>
      </TabPanel>
    </div>
  </div>
  )}


export default Plataforma;