import React from 'react';
import './BarraLateral.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faUsers, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import acacia  from '../../../acacia_light.png';
import frutacia  from '../../../images/logoFrutacia.png';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));


const BarraLateral = props => {
  const classes = useStyles();
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
    <div className="barra">
      <div id="logo-empresa">
        <img src={frutacia} alt="Frutacia" />
        <p>Frutacia</p>
      </div>
      <div id="barra_lista">
        <div className="link-seccion">
          <p>Frutacia</p>
          <IconButton 
            ref={anchorRef}
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            size="small"
          >
            <FontAwesomeIcon icon={faPlus} size="xs" />
          </IconButton >
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}> <FontAwesomeIcon icon={faFolderPlus} size="lg" />Nuevo proyecto</MenuItem>
                    <MenuItem onClick={handleClose}> <FontAwesomeIcon icon={faUsers} size="lg" />Invitar personas</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        </div>
        <div className="lista-proyectos">
          <div className="proyecto">
            <span className="box"></span>
            <p>Predicción semanal de producción de fruta</p>
          </div>
        </div>
      </div>
      <div id="logo-acacia">
        <img src={acacia} alt="Acacia" />
        <span>
        </span>       
      </div>
    </div>
    )}


export default BarraLateral;